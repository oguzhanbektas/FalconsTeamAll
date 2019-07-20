package com.falcons.FalconsTeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.falcons.FalconsTeam.model.Book;
import com.falcons.FalconsTeam.model.Category;
import com.falcons.FalconsTeam.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository repo;

	public List<Category> getCategories() {
		return repo.findAll();
	}
	
}
