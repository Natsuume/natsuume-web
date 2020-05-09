package dev.natsuume.web.controller;

import dev.natsuume.web.data.InformationItem;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InformationController {

  @GetMapping("/api/information")
  public List<InformationItem> getInformation() {
    LocalDate date = LocalDate
        .parse("2020/05/06", DateTimeFormatter.ofPattern("yyyy/MM/dd"));

    return List.of(new InformationItem("これはテストです.", date));
  }
}
