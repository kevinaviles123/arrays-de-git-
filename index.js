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
// 12. Agregar elementos al final del array usando push():
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]
// 13. Eliminar el último elemento del array usando pop():
array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]
// 14. Agregar elementos al principio del array usando unshift():
array.unshift(0);
console.log(array); // Output: [0, 1, 2, 3, 4, 5]
// 15. Eliminar el primer elemento del array usando shift():
array.shift();
console.log(array); // Output: [1, 2, 3, 4, 5]
// 16. Obtener una porción del array usando slice():
const sliceArray = array.slice(1, 3);
console.log(sliceArray); // Output: [2, 3]
// 17. Convertir un array en un string usando join():
const stringFromArray = array.join("-");
console.log(stringFromArray); // Output: "1-2-3-4-5"
// 18. Obtener una subsección del array desde un índice negativo usando slice():
const negativeSliceArray = array.slice(-3);
console.log(negativeSliceArray); // Output: [3, 4, 5]
// 19. Eliminar una porción del array sin modificar el original usando slice():
const newArray = array.slice(0, 2);
console.log(newArray); // Output: [1, 2]
