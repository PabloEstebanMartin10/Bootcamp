public class EcoPersonalizado {
    public static void main(String Args[]) {
        eco("¡Hola!", 3);
    }

    public static void eco(String mensaje, int numero) {
        for (int i = 0; i < numero; i++) {
            System.out.println(mensaje);
        }
    }
}