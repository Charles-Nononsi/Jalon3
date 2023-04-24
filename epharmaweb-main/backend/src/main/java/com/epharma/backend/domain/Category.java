package com.epharma.backend.domain;

public class Category {

  private Integer userId;
  private Integer categoryId;
  private String title;
  private double totalExpense;

  public Category(Integer userId, Integer categoryId, String title, Double totalExpense) {
    this.userId = userId;
    this.categoryId = categoryId;
    this.title = title;
    this.totalExpense = totalExpense;
  }

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public Integer getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(Integer produitId) {
    this.categoryId = produitId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public double getTotalExpense() {
    return totalExpense;
  }

  public void setTotalExpense(double totalExpense) {
    this.totalExpense = totalExpense;
  }
}
