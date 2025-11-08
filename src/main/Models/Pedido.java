package com.fashionflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor       
@AllArgsConstructor      
@Entity                  
@Table(name = "pedido") 
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;

    @Column(nullable = false, length = 50)
    private String fecha;  // Fecha del pedido como texto

    @Column(nullable = false, length = 50)
    private String estado;  // Ej: "PENDIENTE", "ENVIADO", "ENTREGADO"

    @Column(nullable = false)
    private int clienteId;  // ID del cliente que hizo el pedido
}
