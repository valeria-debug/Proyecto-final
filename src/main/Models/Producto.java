package com.fashionflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor        
@AllArgsConstructor       
@Entity                   
@Table(name = "producto") 
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false)
    private double precio;

    @Column(length = 200)
    private String descripcion;

    @Column(nullable = false)
    private int stock;
}
