public class SumaCondicional {
    public static void main(String[] args) {
        sumarSiPositivo(3, 5);
        //sumarSiPositivo(-2, 4);
    }

    private static void sumarSiPositivo(int num1, int num2) {
        if (num1 > 0 && num2 > 0) {
            System.out.printf("La suma de los numeros %d y %d es: %d", num1, num2, (num1 + num2));
            System.out.println();
        } else {
            System.out.println("operación inválida, Hay un número negativo");
        }
    }
}
