package practicasJava.Sheet03.ex02;

public class Main {
    public static void main(String[] args) {
        Producto prod1 = new Producto("monster blanco", 2.00, 50);
        Producto prod2 = new Producto("Reloj Hombre", 50.50);
        prod1.mostrarDatos();
        prod2.mostrarDatos();
    }
}