package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,String> {
//    Product findByName(String name);
//    Product prdlstnm(String prdlstnm);

    Product findByPrdlstreportno(String prdlstreportno);
}
