package com.Practicas.Sheet02.controller;


import com.Practicas.Sheet02.models.Ciudad;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CiudadController {
    private final List<Ciudad> ciudades = new ArrayList<>();

    public CiudadController() {
        for (int i = 0; i < 10; i++) {
            ciudades.add(generarCiudad());
        }
    }

    private Ciudad generarCiudad() {
        Long index = 1L;
        String nombreCiudad = (Math.toIntExact(Math.round(Math.random() * 10))+2) % 2 !=0 ?  "buyaka" : "cowabunga" ;
        int poblacion = Math.toIntExact(Math.round(Math.random() * 10000));
        return new Ciudad(index,nombreCiudad,poblacion);
    }

    @GetMapping("/ciudades")
    public ArrayList<Ciudad> getCiudades(@RequestParam String nombre){
        ArrayList<Ciudad> resultado = new ArrayList<>(
                ciudades.stream()
                        .filter(c -> c.getNombre().toLowerCase().contains(nombre.toLowerCase()))
                        .limit(1)
                        .toList()
        );
        if (!resultado.isEmpty()){
            return resultado;
        }else {
            ArrayList<Ciudad> noResultado = new ArrayList<>();
            for (int i = 0; i < 3; i++) {
                noResultado.add( generarCiudad());
            }
            return noResultado;
        }
    }

    @GetMapping("/ciudad/{index}")
    public Ciudad getCiudadIndex(@PathVariable Long index){
        String nombre = (Math.toIntExact(Math.round(Math.random() * 10))+2) % 2 !=0 ?  "buyaka" : "cowabunga" ;
        int poblacion = Math.toIntExact(Math.round(Math.random() * 10000));
        return new Ciudad(index,nombre,poblacion);
    }
}
