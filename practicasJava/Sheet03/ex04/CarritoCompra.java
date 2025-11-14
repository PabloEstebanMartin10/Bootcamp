package practicasJava.Sheet03.ex04;

import java.util.*;

public class CarritoCompra {
    private class LineaCarrito {
        private Producto producto;
        private int unidades;

        public LineaCarrito(Producto producto, int unidades) {
            this.producto = producto;
            this.unidades = unidades;
        }

        public double subtotal() {
            double subtotal = this.producto.getPrecio() * this.unidades;
            return subtotal;
        }

        public Producto getProducto() {
            return producto;
        }

        public void setProducto(Producto producto) {
            this.producto = producto;
        }

        public int getUnidades() {
            return unidades;
        }

        public void setUnidades(int unidades) {
            this.unidades = unidades;
        }

    }

    private List<LineaCarrito> lineas = new ArrayList<LineaCarrito>();

    void agregarProducto(Producto p, int unidades) {
        if (p != null && unidades > 0) {
            boolean modificado = false;
            if (lineas.size() > 0) {
                for (LineaCarrito linea : lineas) {
                    if (linea.getProducto().getNombre().equalsIgnoreCase(p.getNombre())) {
                        linea.setUnidades(linea.getUnidades() + unidades);
                        modificado = true;
                    }
                }
                if (!modificado) {
                    LineaCarrito linea = new LineaCarrito(p, unidades);
                    lineas.add(linea);
                    System.out.println("se ha añadido el producto " + p.getNombre());
                } else {
                    System.out.println(
                            "ya existe el producto " + p.getNombre() + " en la lista, se han añadido las unidades");
                }
            }
        } else if (p == null) {
            System.err.println("El producto no puede ser nulo");
        } else {
            System.err.println("Las unidades no pueden ser menores o iguales a 0");
        }
    }

    void eliminarProducto(String nombre) {
        for (LineaCarrito linea : lineas) {
            if (linea.getProducto().getNombre().equalsIgnoreCase(nombre)) {
                lineas.remove(linea);
                System.out.println("se ha eliminado correctament el producto: " + nombre);
            }
        }
    }

    double total() {
        double total = 0;
        for (LineaCarrito linea : lineas) {
            total += linea.subtotal();
        }
        return total;
    }

    void mostrarResumen() {

    }
}
