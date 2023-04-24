package com.epharma.backend.services;

import com.epharma.backend.domain.Category;
import com.epharma.backend.exceptions.EtBadRequestException;
import com.epharma.backend.exceptions.EtResourceNotFoundException;

import java.util.List;

public interface CategoryService {

  List<Category> fetchAllCategories(Integer userId);

  Category fetchCategoryById(Integer userId, Integer categoryId) throws EtResourceNotFoundException;

  Category addCategory(Integer userId, String title) throws EtBadRequestException;

  void updateCategory(Integer userId, Integer categoryId, Category category) throws EtBadRequestException;

  void removeCategoryWithAllTransactions(Integer userId, Integer categoryId) throws EtResourceNotFoundException;

}
