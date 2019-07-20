package com.falcons.FalconsTeam.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.falcons.FalconsTeam.model.Book;
import com.falcons.FalconsTeam.services.BookService;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookResources {

	@Autowired
	BookService service;

	@RequestMapping(method = RequestMethod.GET)
	public List<Book> getBooks() {
		return service.getBooks();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Book getBook(@PathVariable int id) {
		return service.getBook(id);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public void deleteBook(@PathVariable int id) {
		// delete operation
		System.out.println("Delete -------------------" + id);
		service.deleteBook(id);
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public void updateBook(@PathVariable int id, Book book) {
		// update operation
		service.updateBook(book);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Book addBook(Book book) {
		// add operation
		return service.saveBook(book);
	}

	@RequestMapping(value = "/list/{name}/{publishYear}", method = RequestMethod.GET)
	public List<Book> findByQuery(@PathVariable String name, @PathVariable int publishYear) {
		return service.findByQuery(name, publishYear);
	}

	@RequestMapping(value = "/category/{id}", method = RequestMethod.GET)
	public List<Book> getBooksByCategoryId(@PathVariable int id) {
		return service.getBooksByCategoryId(id);
	}
}
