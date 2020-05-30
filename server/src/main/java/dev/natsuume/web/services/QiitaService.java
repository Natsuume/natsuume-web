package dev.natsuume.web.services;

import dev.natsuume.web.data.qiita.QiitaItem;
import dev.natsuume.web.data.qiita.QiitaApiResponse;
import java.net.URI;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class QiitaService {

  private static final String HEADER_KEY = "Authorization";
  private static final String HEADER_VALUE = " Bearer %s";
  private static final String TOKEN = "QIITA_TOKEN";
  private static final String URL = "https://qiita.com/api/v2/authenticated_user/items";
  private RestTemplate restTemplate;
  private LocalDate latestCallApiDate = LocalDate.now().minusDays(10);
  private List<QiitaItem> items = Collections.synchronizedList(new ArrayList<>());

  @Autowired
  public QiitaService(RestTemplateBuilder builder) {
    this.restTemplate = builder
        .build();
  }

  public synchronized List<QiitaItem> getQiitaArticles() {
    if(latestCallApiDate.plusDays(1).isBefore(LocalDate.now())) {
      latestCallApiDate = LocalDate.now();
      items.clear();
      items.addAll(getQiitaArticlesFromApi());
    }
    return items;
  }

  private List<QiitaItem> getQiitaArticlesFromApi() {
    var entity = RequestEntity.get(URI.create(URL))
        .header(HEADER_KEY, String.format(HEADER_VALUE, System.getenv(TOKEN)))
        .build();
    var parameterizedTypeReference = new ParameterizedTypeReference<List<QiitaApiResponse>>() {
    };
    var response = restTemplate.exchange(entity, parameterizedTypeReference);

    return response.getBody().stream()
            .filter(Predicate.not(QiitaApiResponse::isPrivate))
            .map(QiitaApiResponse::getImmutableItem)
            .sorted(Comparator.comparing(QiitaItem::getCreatedDate).reversed())
            .collect(Collectors.toList());
  }

}
