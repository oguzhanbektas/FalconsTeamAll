package com.falcons.FalconsTeam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.falcons.FalconsTeam.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	@Query("select p from Book p where p.name = ?1 and p.publishYear=?2")
	public List<Book> findByNameAndYear(String name, int publishYear);
	
	@Query("select p from Book p where p.category.id=?1")
	public List<Book> getBooksByCategoryId (int categoryId);

}
