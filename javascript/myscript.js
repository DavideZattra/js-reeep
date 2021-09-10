/**
 *    SNACK 1
 *    Creare un array di oggetti: ogni oggetto descriverà una bici 
 *    da corsa con le seguenti proprietà: nome e peso.
 *    Stampare a schermo la bici con peso minore.
 * 
 */

// const biciclette = [

//     {
//         nome : 'Lombardo',
//         peso : 28
//     },

//     {
//         nome : 'Graziella',
//         peso : 20
//     },

//     {
//         nome : 'Bianchi',
//         peso : 25
//     }

// ];

// biciclette.push({
//     nome : 'Push',
//     peso : 22
// });

// console.table(biciclette)

// let biciLeggera;

// for (let i = 0; i < biciclette.length; i++){

//     // console.log(biciclette[i]);

//     if (!biciLeggera){
//         biciLeggera = biciclette[i];
//         console.log(biciLeggera);
//         continue
//     }

//     let { peso } = biciclette[i];
//     // let peso = biciclette[i].peso;
    
//     if (peso< biciLeggera.peso){
        
//         biciLeggera = biciclette[i];
//         console.log(biciLeggera);
//     }

//     // console.log(biciclette[i],peso);

// }

// // function bici(nomeBici, pesoBici){  //ES5

// //     return{
// //         nome: nomeBici,
// //         peso: pesoBici
// //     }

// // }

// let copiaBiciLeggera = bici(bicileggera.nome, biciLeggera.peso); 
// let copiaBiciLeggera = copiaBici(biciLeggera);

// function bici(nome, peso){  //ES6

//     return{
//         nome,
//         peso
//     }

// }

// // function copiaBici(bici){

// //     let {nome, peso} = bici;

// //     return {nome, peso}

// // } // è uguale a scriverlo così

// function copiaBici(bici){

//     return {nome, peso}
    
// }




// /**
//  * 
//  *    SNACK 2
//  *    Creare un array di oggetti di squadre di calcio.
//  *    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
//  *    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
//  *    Generare numeri random al posto degli 0 nelle proprietà:
//  *     Punti fatti e falli subiti
//  * 
//  */


// const footballTeams = [
//     {
//         name : 'Milan',
//         points : 0,
//         foulSuffered : 0
//     },

//     {
//         name : 'Roma',
//         points : 0,
//         foulSuffered : 0
//     },

//     {
//         name : 'Lazio',
//         points : 0,
//         foulSuffered : 0
//     },

//     {
//         name : 'Inter',
//         points : 0,
//         foulSuffered : 0
//     }
// ];

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }


/**
 * 
 * SNACK 3
 * Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione
 * (indice) compresa tra i due numeri specificati.
 * Usiamo i nuovi metodi degli array forEach() o filter().
 * 
 */

// function getArrayInterval(array, a, b){
//     array.slice(a, b) => {
//         if (index > a || index < b){}
//     });
// };


const listOfThings = ['cane', 'topo', 'ragno', 'scoiattolo', 'koala', 'rinoceronte', 'gabbiano', 'pellicano'];
const selectionOfThings = listOfThings.forEach((element, index) => {
    console.log (index);
    console.log (element);
    if (index > 2 ){
        return element;
    }
});
// const gatto = listOfThings.slice(2, 6);

console.log(selectionOfThings);