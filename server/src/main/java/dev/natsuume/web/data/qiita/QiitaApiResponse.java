package dev.natsuume.web.data.qiita;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class QiitaApiResponse {
  private String id;
  private String title;
  private List<QiitaTag> tags;
  @JsonProperty("private")
  private boolean isPrivate;
  private String url;
  @JsonProperty("created_at")
  private String createdDate;

  public int getLgtmCount() {
    return lgtmCount;
  }

  public void setLgtmCount(int lgtmCount) {
    this.lgtmCount = lgtmCount;
  }

  @JsonProperty("likes_count")
  private int lgtmCount;

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(String createdDate) {
    this.createdDate = createdDate;
  }

  public String toString(){
    return "["+title+" : " +tags.toString()+"]";
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public List<QiitaTag> getTags() {
    return tags;
  }

  public void setTags(List<QiitaTag> tags) {
    this.tags = tags;
  }

  public boolean isPrivate() {
    return isPrivate;
  }

  public void setPrivate(boolean aPrivate) {
    isPrivate = aPrivate;
  }

  public QiitaItem getImmutableItem() {
    return new QiitaItem(
        title,
        url,
        tags.stream().map(tag -> tag.name).collect(Collectors.toList()),
        lgtmCount,
        createdDate
    );
  }
}
