let btn = document.querySelector('button');
btn.onclick = () => {
    alert('Forma externa na tag html')
}

//Escutador de eventos
btn.addEventListener('click', exibirMensagem)
btn.addEventListener('click', alterarTitulo)

function alterarTitulo(){
    let titulo = document.querySelector('h1')
    titulo.innerHTML = titulo.innerHTML.toUpperCase()
    titulo.style.color = 'red';
}

function exibirMensagem() {
    alert('Forma de eventos do JavaScript')
}
