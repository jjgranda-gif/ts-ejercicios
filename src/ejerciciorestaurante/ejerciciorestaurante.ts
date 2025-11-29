// Se crea la clase Restaurante con métodos para manejar los cálculos del pedido
class Restaurante {
// Método para calcular el total por producto
    calcularTotal(precio: number, cantidad: number): number {
// Multiplica el precio de un producto por la cantidad pedida
        return precio * cantidad;
    }

// Método para aplicar un descuento al total
    aplicarDescuento(total: number, descuento: number): number {
// Calcula el valor del descuento y lo resta del total
        return total - (total * descuento / 100);
    }

// Método para calcular la propina según un porcentaje
    calcularPropina(total: number, porcentaje: number): number {
// Calcula la propina multiplicando el total por el porcentaje
        return total * (porcentaje / 100);
    }
}
// Se crea un objeto Restaurante para usar sus métodos
const restaurante = new Restaurante();

// Se calcula el total de un producto (precio 12, cantidad 3)
let total = restaurante.calcularTotal(12, 3);
// Imprime: 36
console.log("Total por productos:", total);

// Se aplica un descuento del 10%
total = restaurante.aplicarDescuento(total, 10);
// Imprime: 32.4
console.log("Total con descuento:", total);

// El cliente decide dejar una propina del 15%
const propina = restaurante.calcularPropina(total, 15);
// Imprime: 4.86
console.log("Propina sugerida:", propina);
