package com.fashionflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor       
@AllArgsConstructor      
@Entity                  
@Table(name = "cliente") 
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, unique = true, length = 100)
    private String correo;

    @Column(length = 15)
    private String telefono;

    @Column(length = 200)
    private String direccion;
}

