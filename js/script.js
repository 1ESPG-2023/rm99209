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

// function soma(p1,p2,p3) {
//     nr1 = p1;
//     nr2 = p2;
//     resultado = parseInt(nr1) + parseInt(nr2) + parseInt(p3)
//     console.log(`O Resultado é : ${resultado}.`)
//     return (resultado)
    // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
    // console.log(`Este é o parâmetro que foi passado : ${parametro}`);
// }

//ARROW FUNCTION
// const mudaCor = ()=>{
    
    //FUNÇÃO SET-TIME-OUT
//    setTimeout(soma, 5000, 100,100,100);
// } 

// mudaCor()

let tmp = ""

function mudaCor() {

    let r = "";
    let g = "";
    let b = "";

    //random = Gera numeros aleattórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatóriamente

    //Determinando para a variável r um valor entre 0 e 255
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    // console.log(`R: ${r}, G: ${g}, B: ${b}`);

    const cabecalho = document.querySelector(".cabecalho");
    // cabecalho.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    cabecalho.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b})`);

    tmp = setTimeout(mudaCor, 500);

}

mudaCor();

//FUNÇÃO ALTERA BANNER

function alteraBanner() {

    let nr = Math.round(Math.random() * 3);

    let caminho = `./img/banner-lateral-${nr}.png`;

    const img1 = querySelector(".l-e > img")
    img1.src = caminho;
}

alteraBanner();
