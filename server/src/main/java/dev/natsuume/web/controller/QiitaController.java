package dev.natsuume.web.controller;

import dev.natsuume.web.data.qiita.QiitaItem;
import dev.natsuume.web.services.QiitaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QiitaController {

  QiitaService service;

  @Autowired
  public QiitaController(QiitaService service) {
    this.service = service;
  }

  @GetMapping("/api/qiita")
  public List<QiitaItem> getQiitaArticles() {
    return service.getQiitaArticles();
  }
}
