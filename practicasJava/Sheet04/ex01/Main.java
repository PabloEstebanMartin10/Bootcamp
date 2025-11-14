package practicasJava.Sheet04.ex01;

class Animal {

    public void emitrirSonido(){

    }
}

class Perro extends Animal{
    @Override
    public void emitrirSonido() {
        System.out.println("Guau");
    }
}

class Gato extends Animal{
    @Override
    public void emitrirSonido() {
        System.out.println("Miau");
    }
}

class Pato extends Animal{
    @Override
    public void emitrirSonido() {
        System.out.println("Cuack");
    }
}
public class Main {
    public static void main(String[] args) {
        Perro perro = new Perro();
        Gato gato = new Gato();
        Pato pato = new Pato();

        perro.emitrirSonido();
        gato.emitrirSonido();
        pato.emitrirSonido();
    }
}