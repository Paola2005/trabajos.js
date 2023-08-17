//Imprima la siguiente secuencia usando ciclos 

let numero =1                               //se crea un avriable numero para decirle que esta empieza desde 1
while (numero <= 10){                       //Se le dice que mientras que numero sea menor o igual a 10
    let j=1                                 //Se crea una cadena de texto
    let text=""
    
        while (numero != j){               
            text += j+"  "                  //mientras mumero sea diferente a j entonces se le tiene que agregar j al texto mas un pequeño espacio
            j++;                            //Incrementa j en 1 
        }
        numero++;                           //Incrementa numero en 1 para avanzar al siguiente numero
        console.log(text)}  //Se imprime en la consola

        //Desarrollado por:Jenny Paola Velasco Manrique