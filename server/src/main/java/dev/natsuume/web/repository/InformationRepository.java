package dev.natsuume.web.repository;

import dev.natsuume.web.data.InformationItem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformationRepository extends JpaRepository<InformationItem, Integer> {
  List<InformationItem> findAllByOrderByUploadedDesc();
}
