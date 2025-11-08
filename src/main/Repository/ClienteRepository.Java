package com.fashionflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fashionflow.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
