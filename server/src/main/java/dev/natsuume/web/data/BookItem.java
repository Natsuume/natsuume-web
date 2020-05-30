package dev.natsuume.web.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="book")
public class BookItem {
  @Id
  String isbn;
}
