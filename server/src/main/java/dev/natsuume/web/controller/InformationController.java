package dev.natsuume.web.controller;

import dev.natsuume.web.data.InformationItem;
import dev.natsuume.web.repository.InformationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InformationController {

  private InformationRepository repository;

  @Autowired
  public InformationController(InformationRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/api/information")
  public List<InformationItem> getInformation() {
    return repository.findAllByOrderByUploadedDesc();
  }
}
