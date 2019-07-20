package com.falcons.FalconsTeam.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.falcons.FalconsTeam.model.Book;
import com.falcons.FalconsTeam.services.ShoppingCartService;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class ShoppingCartResources {
	@Autowired
	ShoppingCartService service;

	@RequestMapping(method = RequestMethod.GET)
	public List<Book> getShoppingCart() {
		return service.getCart();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public void postShoppingCart(@PathVariable Integer id) {
		service.postShoppingCart(id);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public boolean deleteItemShoppingCart(@PathVariable Integer id) {
		service.deleteItemShoppingCart(id);
		return true;
	}

	@RequestMapping(value = "/deleteAll", method = RequestMethod.GET)
	public void deleteAll() {
		service.deleteAll();
	}

}
