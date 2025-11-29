// Se crea la clase Hospital con métodos para cálculos médicos básicos
class Hospital {
// Método para calcular la dosis total de un medicamento
    calcularDosis(peso: number, mgPorKg: number): number {
// Multiplica el peso del paciente por los miligramos por kilogramo
        return peso * mgPorKg;
    }
// Método para calcular el Índice de Masa Corporal (IMC)
    calcularIMC(peso: number, altura: number): number {
// Divide el peso entre la altura al cuadrado
        return peso / (altura * altura);
    }
// Método para registrar la cantidad total de visitas
    registrarVisitas(visitasActuales: number, nuevas: number): number {
// Suma las visitas actuales con las nuevas ingresadas
        return visitasActuales + nuevas;
    }
}
// Se crea un objeto Hospital para usar sus métodos
const hospital = new Hospital();

// Cálculo de dosis para un paciente de 70 kg, con 5 mg por kg
const dosis = hospital.calcularDosis(70, 5);
// Imprime: 350
console.log("Dosis total del medicamento (mg):", dosis);
// Cálculo del IMC de un paciente (peso 80 kg, altura 1.75 m)
const imc = hospital.calcularIMC(80, 1.75);
// Imprime: 26.12 aproximadamente
console.log("IMC del paciente:", imc);
// Registro de visitas: el paciente tenía 3 visitas, se registran 2 nuevas
const totalVisitas = hospital.registrarVisitas(3, 2);
// Imprime: 5
console.log("Total de visitas registradas:", totalVisitas);
