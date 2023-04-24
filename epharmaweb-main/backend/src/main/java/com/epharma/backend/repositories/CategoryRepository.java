package com.epharma.backend.repositories;

import com.epharma.backend.domain.Category;
import com.epharma.backend.exceptions.EtBadRequestException;
import com.epharma.backend.exceptions.EtResourceNotFoundException;

import java.util.List;

public interface CategoryRepository {

  List<Category> findAll(Integer userId) throws EtResourceNotFoundException;

  Category findById(Integer userId, Integer categoryId) throws EtResourceNotFoundException;

  Integer create(Integer userId, String title) throws EtBadRequestException;

  void update(Integer userId, Integer categoryId, Category category) throws EtBadRequestException;

  void removeByID(Integer userId, Integer categoryId);
}
