package com.falcons.FalconsTeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.falcons.FalconsTeam.model.Book;
import com.falcons.FalconsTeam.model.ShoppingCart;
import com.falcons.FalconsTeam.repository.BookRepository;
import com.falcons.FalconsTeam.repository.ShoppingCartRepository;

@Transactional
@Service
public class ShoppingCartService {

	@Autowired
	ShoppingCartRepository repo;
	@Autowired
	BookRepository bookRepo;

	public List<Book> getCart() {
		return repo.findById(1).get().getBooks();
	}

	public void postShoppingCart(Integer id) {
		ShoppingCart shopCart = repo.findById(1).get();
		Book b = bookRepo.getOne(id);
		shopCart.getBooks().add(b);
		repo.save(shopCart);
	}

	public void deleteItemShoppingCart(Integer id) {
		System.out.println("Delete item :" + id);
		ShoppingCart shopCart = repo.findById(1).get();
		Book b = bookRepo.findById(id).get();
		shopCart.getBooks().remove(b);

		repo.save(shopCart);
	}

	public void deleteAll() {
		repo.deleteAll();
	}
}
