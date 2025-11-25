// Define una clase llamada Persona
class Persona {                 
// Declara una propiedad 'nombre' de tipo string y la inicializa vacía   
    nombre: string = "" 
// Declara una propiedad 'edad' de tipo number y la inicializa en 0          
    edad: number = 0               
// Constructor que recibe nombre y edad
    constructor(nombre: string, edad: number) {  
// Asigna el valor recibido a la propiedad 'nombre'
        this.nombre = nombre   
// Asigna el valor recibido a la propiedad 'edad'    
        this.edad = edad          
    }
// Método de la clase Persona llamado saludar
    saludar() {                    
// Imprime el mensaje saludando con el nombre
        console.log("Hola soy" + this.nombre)   
    }
}
// Crea un arreglo llamado Lista que contiene objetos Persona
let Lista: Persona[] = [          
    new Persona('Luis', 25),        
    new Persona('Luis', 25),        
    new Persona('Luis', 25),        
];
// Imprime en consola todo el arreglo Lista
console.log(Lista)                