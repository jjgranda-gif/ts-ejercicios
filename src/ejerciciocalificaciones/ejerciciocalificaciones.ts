// Se crea la clase Estudiante con métodos para manejar su rendimiento
class Estudiante {
// Método para agregar una nueva nota y recalcular el promedio
    agregarNota(promedio: number, nuevaNota: number): number {
// Calcula el nuevo promedio sumando ambas notas y dividiendo para 2
        return (promedio + nuevaNota) / 2;
    }
// Método para verificar si el estudiante aprueba
    aprobar(nota: number, minima: number): boolean {
// Compara si la nota es mayor o igual a la mínima requerida
        return nota >= minima;
    }
// Método para calcular el total de faltas
    calcularFaltas(faltasActuales: number, nuevas: number): number {
// Suma las faltas existentes con las nuevas registradas
        return faltasActuales + nuevas;
    }
}
// Se crea un objeto Estudiante para usar sus métodos
const estudiante = new Estudiante();

// Se define un promedio inicial
let promedio = 8;

// Se agrega una nueva nota al promedio
promedio = estudiante.agregarNota(promedio, 10);
// Imprime: 9
console.log("Nuevo promedio:", promedio);
// Se verifica si aprueba con una mínima de 7
let aprobado = estudiante.aprobar(promedio, 7);
// Imprime: true
console.log("¿Aprueba?:", aprobado);
// Se llevan las faltas actuales
let faltas = 3;
// Se suman nuevas faltas
faltas = estudiante.calcularFaltas(faltas, 2);
// Imprime: 5
console.log("Total de faltas:", faltas);
