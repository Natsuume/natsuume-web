package dev.natsuume.web.data.qiita;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class QiitaTag {
  String name;


  public String toString() {
    return name;
  }
}
