package practicasJava.Sheet02.ex03;

public class PromedioArray {
    public static void main(String[] args) {
        int[] numeros = { 4, 8, 6, 2 };
        System.out.println(calcularPromedio(numeros));
    }

    private static int calcularPromedio(int[] numeros) {
        int promedio = 0;
        if (numeros.length > 0) {
            for (int i : numeros) {
                promedio += i;
            }
            promedio = promedio/numeros.length;
        }
        return promedio;
    }
}
