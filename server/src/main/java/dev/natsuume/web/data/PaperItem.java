package dev.natsuume.web.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="paper")
public class PaperItem {
  @Id
  int paperId;
  String title;
  String author;
  String media;
  String year;
}
