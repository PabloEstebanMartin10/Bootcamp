package practicasJava.Sheet04.ex02;

class Empleado {
    private String nombre;
    private double salarioBase;

    public Empleado(String nombre, double salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
}

class EmpleadoTiempoCompleto extends Empleado {

    public EmpleadoTiempoCompleto(String nombre, double salarioBase) {
        super(nombre, salarioBase * 1.2);
    }

}

class EmpleadoPorHoras extends Empleado {
    private int horasTrabajadas;

    public EmpleadoPorHoras(String nombre, double salarioBase, int horasTrabajadas) {
        super(nombre, salarioBase);
        this.horasTrabajadas = horasTrabajadas;
    }

    public double calcularSalario(){
        salarioBase = horasTrabajadas*15;
        return 2;
    }

}

public class Main {
    public static void main(String[] args) {

    }
}
