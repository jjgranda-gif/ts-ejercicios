
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
}
// Crea la clase Estudiante y hereda todo lo de Persona
class Estudiante extends Persona {    
// Crea la propiedad curso y la deja vacía    
    curso = ""                        
// Constructor que recibe nombre, edad y curso
    constructor(nombre: string, edad: number, curso:string) { 
 // Llama al constructor de Persona y asigna nombre y edad        
        super(nombre, edad)
 // Guarda el curso que recibe          
        this.curso = curso           
    }
//Crea un metodo con la herencia
    mostrarTodo() {    
        console.log("Nombre: " + this.nombre)
        console.log("Edad: " + this.edad)
         console.log("Curso: " + this.curso)
    }
};
// Crea un Estudiante con datos
let e1 = new Estudiante("Ana", 20, "Programación")
// Crea un Estudiante con datos     
e1.mostrarTodo()    
