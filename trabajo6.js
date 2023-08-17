//####################
//# Trabajo en clase #
//####################


//crear un arreglo de 10 posiciones de numeros con valores aleatorios. muestra por consola el indice y el valor al que corresponde. usa dos metodos uno para llenar valores y otro para mostar

//const aleatorios = Array.from({ length: 10 }, (v, i) => Math.floor(Math.random() * 100));
//
//
//for (let i = 0; i < aleatorios.length; i++)
//{
//    console.log(i,":", aleatorios[i]);
//}

// Función para llenar el arreglo con valores aleatorios
function nose(array){
   
    for (let i = 0; i < array.length; i++){
        array[i] = Math.floor(Math.random() * 100);
    }
}

// Función para mostrar el índice y el valor del arreglo
function nose2(array){
    for (let i = 0; i < array.length; i++) {
        console.log( i,":",array[i]);
      }
}
// Crear un arreglo de 10 posiciones
const most= new Array(10);

// Llenar el arreglo con valores aleatorios
nose(most);

// Mostrar el índice y el valor del arreglo
nose2(most);

//Desarrollado por: Jenny Paola Velasco Manrique

    