package com.example.Sheet03.model;
import jakarta.persistence.*;


@Entity
public class Articulo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 150)
    private String titulo;
    private double precioUnitario;
    @Column(unique = true)
    private String referenciaInterna;
}
