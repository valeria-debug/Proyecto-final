package com.fashionflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fashionflow.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
