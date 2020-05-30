package dev.natsuume.web.controller;

import dev.natsuume.web.data.BookItem;
import dev.natsuume.web.repository.BookRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

  private BookRepository repository;

  @Autowired
  public BookController(BookRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/api/book")
  public List<BookItem> getBooksIsbn(){
    return repository.findAll();
  }
}
