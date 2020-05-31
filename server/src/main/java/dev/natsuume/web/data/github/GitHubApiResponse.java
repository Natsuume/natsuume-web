package dev.natsuume.web.data.github;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Comparator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;
import lombok.Data;
import org.springframework.lang.Nullable;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class GitHubApiResponse {
  String name;
  @JsonProperty("html_url")
  String htmlUrl;
  @JsonProperty("private")
  boolean isPrivate;
  boolean fork;
  @Nullable
  String description;
  @JsonProperty("created_at")
  String createdAt;
  @JsonProperty("updated_at")
  String updatedAt;
  String languages_url;
  License license;

  Map<String, Long> languages;

  public boolean isPrivate() {
    return isPrivate;
  }

  public boolean isFork() {
    return fork;
  }

  public String getUpdatedAt() {
    return updatedAt;
  }

  public String getLanguages_url() {
    return languages_url;
  }

  public void setLanguages(Map<String, Long> languages) {
    this.languages = languages;
  }

  public GitHubItem getImmutableItem() {
    return new GitHubItem(
        name,
        description,
        createdAt,
        updatedAt,
        license,
        languages.entrySet().stream()
          .sorted(Comparator.comparingLong(Entry::getValue))
          .map(Entry::getKey)
          .collect(Collectors.toList()),
        htmlUrl
    );
  }
}
