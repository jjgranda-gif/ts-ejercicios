// Se crea la clase Auto para simular su comportamiento básico
class Auto {

// Método para acelerar el auto
    acelerar(velocidadActual: number, incremento: number): number {
// Suma el incremento a la velocidad actual y devuelve el nuevo valor
        return velocidadActual + incremento;
    }

// Método para frenar el auto
    frenar(velocidadActual: number, decremento: number): number {
// Calcula la nueva velocidad restando el decremento
        const nuevaVelocidad = velocidadActual - decremento;

// Si la velocidad baja de 0, devuelve 0
        if (nuevaVelocidad < 0) {
            return 0;
        }
// En caso contrario, devuelve la velocidad calculada
        return nuevaVelocidad;
    }

// Método para calcular la velocidad media en un recorrido
    recorrer(distancia: number, tiempo: number): number {
// Calcula la velocidad promedio dividiendo distancia para tiempo
        return distancia / tiempo;
    }
}
// Se crea un objeto Auto para usar sus métodos
const auto = new Auto();

// Velocidad inicial del auto
let velocidad = 0;

// El auto acelera aumentando 40 km/h
velocidad = auto.acelerar(velocidad, 40);
// Imprime: 40
console.log("Velocidad después de acelerar:", velocidad);

// El auto frena reduciendo 15 km/h
velocidad = auto.frenar(velocidad, 15);
// Imprime: 25
console.log("Velocidad después de frenar:", velocidad);

// El auto intenta frenar más de lo que tiene
velocidad = auto.frenar(velocidad, 50);
// Imprime: 0 (porque no puede quedar en negativo)
console.log("Velocidad al frenar fuerte:", velocidad);

// Se calcula la velocidad media de un recorrido
const velocidadMedia = auto.recorrer(100, 2);
// Imprime: 50
console.log("Velocidad media del recorrido:", velocidadMedia);
