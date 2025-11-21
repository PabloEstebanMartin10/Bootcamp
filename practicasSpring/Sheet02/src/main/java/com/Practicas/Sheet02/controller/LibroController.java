package com.Practicas.Sheet02.controller;

import com.Practicas.Sheet02.models.Libro;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class LibroController {
    private final List<Libro> libros = new ArrayList<>();

    @PostMapping("/libros")
    public ResponseEntity<Void> crearLibro(@RequestBody Libro libro) {
        Long id = (long) (Math.random() * 10);
        libro.setId(id);
        URI location = URI.create("/api/libro/" + id);
        HttpHeaders headers = new HttpHeaders();
        libros.add(libro);
        return ResponseEntity
                .created(location)
                .build();
    }
}
