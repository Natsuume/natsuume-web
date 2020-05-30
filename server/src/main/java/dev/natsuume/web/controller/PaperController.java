package dev.natsuume.web.controller;

import dev.natsuume.web.data.PaperItem;
import dev.natsuume.web.repository.PaperRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaperController {

  private PaperRepository repository;

  @Autowired
  public PaperController(PaperRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/api/paper")
  public List<PaperItem> getPapers() {
    return repository.findAll();
  }
}
