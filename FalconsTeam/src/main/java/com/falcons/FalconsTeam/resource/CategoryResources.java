package com.falcons.FalconsTeam.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.falcons.FalconsTeam.services.BookService;
import com.falcons.FalconsTeam.services.CategoryService;
import com.falcons.FalconsTeam.model.Category;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class CategoryResources {

	@Autowired
	CategoryService service;
	@Autowired
	BookService bookService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Category> getCategories() {
		return service.getCategories();
	}

}
