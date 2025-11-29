// Se crea la clase Banco que contiene todas las operaciones
class Banco {
// Método para depositar dinero en la cuenta
    depositar(saldo: number, monto: number): number {
// Devuelve el saldo más el monto depositado
        return saldo + monto;
    }

// Método para retirar dinero
    retirar(saldo: number, monto: number): number {
// Verifica si el monto a retirar es mayor que el saldo disponible
        if (monto > saldo) {
// Si no hay dinero suficiente, lanza un error
            throw new Error("Fondos insuficientes");
        }
// Si hay dinero, devuelve el saldo restando el monto retirado
        return saldo - monto;
    }

// Método para transferir dinero desde una cuenta origen
    transferir(saldoOrigen: number, monto: number): number {
// Verifica si la transferencia excede el saldo disponible
        if (monto > saldoOrigen) {
// Si no alcanza, lanza un error
            throw new Error("No se puede transferir más del saldo disponible");
        }
// Si alcanza, devuelve el saldo restante después de transferir
        return saldoOrigen - monto;
    }
}
// Se crea un objeto del Banco para usar sus métodos
const banco = new Banco();

// Se define un saldo inicial de 100
let saldo = 100;

// Se deposita 50 al saldo
saldo = banco.depositar(saldo, 50);
// Imprime: 150
console.log("Saldo después del depósito:", saldo);

// Se retiran 30 del saldo
saldo = banco.retirar(saldo, 30);
// Imprime: 120
console.log("Saldo después del retiro:", saldo);

// Se transfieren 80 del saldo
saldo = banco.transferir(saldo, 80);
// Imprime: 40
console.log("Saldo después de la transferencia:", saldo);
