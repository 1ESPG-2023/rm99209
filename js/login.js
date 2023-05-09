
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345",
}

const usuario2 = {
    nomeUsuario:"anziha",
    senhaUsuario:"12345",
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",listaDeUsuarios)


//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:"",
// }



addEventListener("click", (evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit");{
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
        
        //RECUPERANDO DOS INPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;
        
        const h1Titulo = document.querySelector("#titulo");
        
        let lista = JSON.parse(localStorage.getItem("listaUser"));
        
        lista.forEach((usuario) => {
            //VALIDAÇÃO
            if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                console.log("VALIDADO!")
                h1Titulo.innerHTML = "Bem vindo(a) " + usuario.nomeUsuario;
            }else {
                console.log("NÃO VALIDOU!")
                h1Titulo.innerHTML = ""
            }

        });
    }

})