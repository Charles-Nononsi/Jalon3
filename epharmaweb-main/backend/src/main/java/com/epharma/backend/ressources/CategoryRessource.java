package com.epharma.backend.ressources;

import com.epharma.backend.domain.Category;
import com.epharma.backend.services.CategoryService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/category")
public class CategoryRessource {

  @Autowired
  CategoryService categoryService;

  @GetMapping("")
  public String getAllCategory(HttpServletRequest request) {
    int userId = (Integer) request.getAttribute("userId");
    return "Authenticated! UserId: " + userId;
  }

  @PostMapping("")
  public ResponseEntity<Category> addCategory(HttpServletRequest request,
                                              @RequestBody Map<String, Object> categoryMap) {
    int userId = (Integer) request.getAttribute("userId");
    String title = (String) categoryMap.get("title");
    Category category = categoryService.addCategory(userId, title);
    return new ResponseEntity<>(category, HttpStatus.CREATED);

  }
}
