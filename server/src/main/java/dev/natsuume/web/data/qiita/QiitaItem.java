package dev.natsuume.web.data.qiita;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class QiitaItem {

  private final String title;
  private final String url;
  private final List<String> tags;
  private final int lgtmCount;
  private final LocalDate createdDate;
  private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

  public String getUrl() {
    return url;
  }

  public List<String> getTags() {
    return List.copyOf(tags);
  }

  public int getLgtmCount() {
    return lgtmCount;
  }

  public LocalDate getCreatedDate() {
    return createdDate;
  }

  public static DateTimeFormatter getFormatter() {
    return formatter;
  }

  public String getTitle() {
    return title;
  }

  public QiitaItem(
      String title,
      String url,
      List<String> tags,
      int lgtmCount,
      String createdDate
  ) {
    this.title = title;
    this.url = url;
    this.tags = List.copyOf(tags);
    this.lgtmCount = lgtmCount;
    this.createdDate = LocalDate.parse(createdDate.split("T")[0], formatter);
  }

}
