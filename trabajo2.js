//################################################################
//Trabajo que hice en la tarde porque estaba desparchada
//################################################################

//Se pide que se haga una lista de numeros del 0 al 10 y que se informe cuales numero son pares o impares

for (let i = 0; i <=10; i++){
    if (i%2==0){
        console.log("El numero",i, "Es par");
    }
    else{
        console.log("El numero",i, "Es impar");
    }
}


//################################################################
//Trabajo en clase
//################################################################


//variablles para almacenar los numeros dependiendo del tipo
pares=0
imapres=0

    for (let i = 1; i <=578934; i++){ //se crea una variable dentro del ciclo for 
            //esa varaible i tiene que ser 1 o menor o igual a 578934 y se le va a ir incrementando
        if (i%2==0){
            pares+=i
            //si el resultado de i dividido en 2 es 0 entonces se suma a pares
            
        }
        else{
            imapres+=i
            // si el resultado no es 0 se sume a impares 
        }
    }
    console.log(pares)
    console.log(imapres)//se imprimen las sumas

    
//Desarrolado por: Jenny Paola Velasco Manrique