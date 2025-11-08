package com.fashionflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fashionflow.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
}
