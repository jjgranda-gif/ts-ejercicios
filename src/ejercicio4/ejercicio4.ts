// Se crea la clase base llamada Animal
class Animal {
  
// Método que será sobrescrito por las clases hijas
  sonar(): void {
    console.log("El animal hace un sonido.");
  }
}
// Se crea la clase Perro que hereda de Animal
class Perro extends Animal {

// Se sobrescribe el método sonar para que haga un sonido diferente
  sonar(): void {
    console.log("El perro ladra: ¡Guau!");
  }
}
// Se crea la clase Gato que también hereda de Animal
class Gato extends Animal {

// Se sobrescribe el método sonar para que haga un sonido diferente
  sonar(): void {
    console.log("El gato maúlla: ¡Miau!");
  }
}
// Se crea un arreglo con objetos Perro y Gato, tratados como Animales
const animales: Animal[] = [new Perro(), new Gato()];
// Se recorre el arreglo y se llama al método sonar de cada animal
animales.forEach(a => a.sonar());