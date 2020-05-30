package dev.natsuume.web.data.github;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

public class GitHubItem {
  private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
  private final String name;
  private final Optional<String> description;
  private LocalDate createdDate;
  private LocalDate updatedDate;
  private Optional<String> license;
  private List<String> languages;
  private String url;

  public static DateTimeFormatter getFormatter() {
    return formatter;
  }

  public String getName() {
    return name;
  }

  public Optional<String> getDescription() {
    return description;
  }

  public LocalDate getCreatedDate() {
    return createdDate;
  }

  public LocalDate getUpdatedDate() {
    return updatedDate;
  }

  public Optional<String> getLicense() {
    return license;
  }

  public List<String> getLanguages() {
    return List.copyOf(languages);
  }

  public String getUrl() {
    return url;
  }

  public GitHubItem(
      String name,
      String description,
      String createdDate,
      String updatedDate,
      License license,
      List<String> languages,
      String url
  ) {
    this.name = name;
    this.description = Optional.ofNullable(description);
    this.createdDate = LocalDate.parse(createdDate.split("T")[0], formatter);
    this.updatedDate = LocalDate.parse(updatedDate.split("T")[0], formatter);
    this.license = license == null ? Optional.empty() : Optional.of(license.name);
    this.languages = List.copyOf(languages);
    this.url = url;
  }

}
