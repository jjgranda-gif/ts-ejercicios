// Se crea la clase CuentaBancaria
class CuentaBancaria {

  // Se declara un atributo privado llamado saldo
  private saldo: number;

  // El constructor inicializa el saldo en 0 cuando se crea la cuenta
  constructor() {
    this.saldo = 0;
  }

  // Método que permite sumar dinero al saldo
  depositar(cantidad: number): void {
    this.saldo += cantidad;
  }

  // Método que devuelve el saldo actual
  mostrarSaldo(): number {
    return this.saldo;
  }
}
// Se crea un objeto de tipo CuentaBancaria
const cuenta = new CuentaBancaria();

// Se deposita dinero en la cuenta
cuenta.depositar(100);

// Se muestra el saldo actual en la consola
console.log("Saldo actual:", cuenta.mostrarSaldo());