let arrayVacio = [];
let arrayConElementos = [1, 2, 3, 4, 5];
let arrayDiferentesTipos = [1, 'dos', true, { nombre: 'Juan' }];
let arrayConstructor = new Array(3);
let secuenciaNumerica = Array.from({ length: 5 }, (_, index) => index + 1);
let arrayRepetido = Array(5).fill('a');
let cadena = 'Hola, cómo estás';
let arrayDesdeCadena = cadena.split(' ');
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
let arrayConValoresRepetidos = [1, 2, 2, 3, 3, 4, 5];
let arrayUnico = [...new Set(arrayConValoresRepetidos)];
function generarArrayDinamico(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.random());
    }
    return array;
  }
  
  let arrayDinamico = generarArrayDinamico(5);
  // 11. Obtener la longitud de un array:
const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5