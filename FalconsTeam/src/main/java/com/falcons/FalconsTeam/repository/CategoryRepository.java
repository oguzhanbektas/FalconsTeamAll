package com.falcons.FalconsTeam.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.falcons.FalconsTeam.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	

	
}
