package com.epharma.backend.services;

import com.epharma.backend.domain.Category;
import com.epharma.backend.exceptions.EtBadRequestException;
import com.epharma.backend.exceptions.EtResourceNotFoundException;
import com.epharma.backend.repositories.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Transactional
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  CategoryRepository categoryRepository;

  @Override
  public List<Category> fetchAllCategories(Integer userId) {
    return null;
  }

  @Override
  public Category fetchCategoryById(Integer userId, Integer categoryId) throws EtResourceNotFoundException {
    return null;
  }

  @Override
  public Category addCategory(Integer userId, String title) throws EtBadRequestException {
    int categoryId = categoryRepository.create(userId, title);
    return categoryRepository.findById(userId, categoryId);
  }

  @Override
  public void updateCategory(Integer userId, Integer categoryId, Category category) throws EtBadRequestException {

  }

  @Override
  public void removeCategoryWithAllTransactions(Integer userId, Integer categoryId) throws EtResourceNotFoundException {

  }
}
