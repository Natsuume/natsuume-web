package dev.natsuume.web.data;

import java.time.LocalDate;
import java.util.Optional;

public class InformationItem {

  private final String content;
  private final LocalDate date;
  private final Optional<String> thumbnailUrl;

  public InformationItem(String content, LocalDate date) {
    this(content, date, Optional.empty());
  }

  public InformationItem(String content, LocalDate date, Optional<String> thumbnailUrl) {
    this.content = content;
    this.date = date;
    this.thumbnailUrl = thumbnailUrl;
  }

  public String getContent() {
    return content;
  }

  public LocalDate getDate() {
    return date;
  }

  public Optional<String> getThumbnailUrl() {
    return thumbnailUrl;
  }
}
