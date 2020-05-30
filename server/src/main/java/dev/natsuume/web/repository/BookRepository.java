package dev.natsuume.web.repository;

import dev.natsuume.web.data.BookItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookItem, Integer> {
}
