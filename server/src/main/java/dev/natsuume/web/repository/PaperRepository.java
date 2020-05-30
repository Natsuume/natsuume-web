package dev.natsuume.web.repository;

import dev.natsuume.web.data.PaperItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaperRepository extends JpaRepository<PaperItem, Integer> {

}
