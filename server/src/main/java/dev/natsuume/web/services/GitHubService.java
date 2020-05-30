package dev.natsuume.web.services;

import dev.natsuume.web.data.github.GitHubApiResponse;
import dev.natsuume.web.data.github.GitHubItem;
import java.net.URI;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GitHubService {

  private static final String ROOT_URL = "https://api.github.com";
  private static final String REPO_URL = "/user/repos";
  private static final String AUTH_KEY = "Authorization";
  private static final String AUTH_VALUE = "token %s";
  private static final String ACCEPT_KEY = "Accept";
  private static final String ACCEPT_VALUE = "application/vnd.github.v3+json";
  private static final String TOKEN = "GITHUB_TOKEN";

  private RestTemplate restTemplate;
  private LocalDate latestCallApiDate = LocalDate.now().minusDays(10);
  private List<GitHubItem> items = Collections.synchronizedList(new ArrayList<>());

  @Autowired
  public GitHubService(RestTemplateBuilder builder) {
    this.restTemplate = builder
        .build();
  }

  public synchronized List<GitHubItem> getGitHubRepositories() {
    if (latestCallApiDate.plusDays(1).isBefore(LocalDate.now())) {
      latestCallApiDate = LocalDate.now();
      items.clear();
      items.addAll(getGitHubRepositoriesFromApi());
      System.out.println("call");
    }
    return items;
  }

  private synchronized List<GitHubItem> getGitHubRepositoriesFromApi() {
    var entity = RequestEntity.get(URI.create(ROOT_URL + REPO_URL))
        .header(AUTH_KEY, String.format(AUTH_VALUE, System.getenv(TOKEN)))
        .header(ACCEPT_KEY, ACCEPT_VALUE)
        .build();
    var parameterizedTypeReference = new ParameterizedTypeReference<List<GitHubApiResponse>>() {
    };

    var response = restTemplate.exchange(entity, parameterizedTypeReference).getBody()
        .stream()
        .filter(
            Predicate.not(GitHubApiResponse::isPrivate)
                .and(Predicate.not(GitHubApiResponse::isFork)))
        .collect(Collectors.toList());
    response.parallelStream()
        .forEach(r -> r.setLanguages(getRepositoryLanguages(r.getLanguages_url())));

    return response
        .stream()
        .map(GitHubApiResponse::getImmutableItem)
        .sorted(Comparator.comparing(GitHubItem::getUpdatedDate).reversed())
        .collect(Collectors.toList());
  }

  private Map<String, Long> getRepositoryLanguages(String url) {
    var entity = RequestEntity.get(URI.create(url))
        .header(AUTH_KEY, String.format(AUTH_VALUE, System.getenv(TOKEN)))
        .header(ACCEPT_KEY, ACCEPT_VALUE)
        .build();
    var parameterizedTypeReference =
        new ParameterizedTypeReference<Map<String, Long>>() {
        };
    var response = restTemplate.exchange(entity, parameterizedTypeReference);
    return response.getBody();
  }

}
