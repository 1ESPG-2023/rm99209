// //const liElement = document.getElementsByTagName("li");
  

// // for (let index = 0; index < liElement.length ; index++) {
// //     console.log(liElement[index].textContent)
// // }
// // // console.log(liElement.length)

// //Declaração de arrays
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// // let nr3 = nr1+nr2;
// let nr3 = [...nr1,...nr2];

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

// //Listando um array! Técnica especial
// //nr3.forEach((itemDoaArray)=>{
//     //console.log(`Array-3 sendo listado ${itemDoaArray}`);
// //})

// //Listando o array com MAP
// nr3.map((numero,key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
// })

// //CONVERTENDO HTML COLLECTION EM ARRAY DE FORMA INDIRETA
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// liElementArray.map((item,key)=>{
//     if (item.textContent == "Item-39"){
//         console.log(`${(key+1)} - ${item.textContent = "LOCALIZADO"}`);
//     }
// })
