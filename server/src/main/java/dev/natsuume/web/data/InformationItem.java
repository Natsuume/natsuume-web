package dev.natsuume.web.data;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="information")
public class InformationItem{

  @Id
  private Integer infoId;
  private String content;
  private Date uploaded;
  private String thumbnailUrl;

}
