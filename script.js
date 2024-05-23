
const btnCriar = document.querySelector('#btnCriar');
const inputusuario = document.querySelector('#inputusuario');
const listafilmes = document.querySelector('#listafilmes');

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    const novoFilme = document.createElement('li');
    novoFilme.innerText = inputusuario.value;

    const btnEditar = document.createElement('button');
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener('click', function (){
        novoFilme.style.color = "white";
        novoFilme.classList.add('fundo-preto')
    })

    listafilmes.append(novoFilme);
    novoFilme.append(btnEditar);

    inputusuario.value = ""
})