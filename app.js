let amigos =  [];

function adicionarAmigo() {
    const campoNome = document.getElementById('amigo');
    const nome = campoNome.value.trim();
    if (nome != '') {
        amigos.push(nome);
        campoNome.value = '';
        atualizarListaAmigos();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (const amigo of amigos) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = `${amigo}`;
        lista.appendChild(novoAmigo);
    }
}