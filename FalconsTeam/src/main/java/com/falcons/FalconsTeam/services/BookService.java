package com.falcons.FalconsTeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.falcons.FalconsTeam.model.Book;
import com.falcons.FalconsTeam.repository.BookRepository;
import com.falcons.FalconsTeam.repository.CategoryRepository;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;
	@Autowired
	CategoryRepository repo;

	public Book getBook(int id) {
		return bookRepository.findById(id).get();
	}

	public List getBooks() {
		return bookRepository.findAll();
	}

	public void updateBook(Book book) {
		bookRepository.save(book);
	}

	public void deleteBook(int id) {
		bookRepository.deleteById(id);
	}

	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	public List<Book> findByQuery(String name, int publishYear) {
		return bookRepository.findByNameAndYear(name, publishYear);
	}

	public List<Book> getBooksByCategoryId(int categoryId) {
		return bookRepository.getBooksByCategoryId(categoryId);
	}

}
