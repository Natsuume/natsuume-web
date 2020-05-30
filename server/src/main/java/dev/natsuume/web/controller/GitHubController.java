package dev.natsuume.web.controller;

import dev.natsuume.web.data.github.GitHubItem;
import dev.natsuume.web.services.GitHubService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GitHubController {

  GitHubService service;

  @Autowired
  public GitHubController(GitHubService service) {
    this.service = service;
  }

  @GetMapping("/api/github")
  public List<GitHubItem> getGitHubRepositories() {
    return service.getGitHubRepositories();
  }
}
