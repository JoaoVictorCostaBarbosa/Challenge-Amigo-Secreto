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

function sortearAmigo() {
    let quantidadeAmigos = amigos.length;
    if (quantidadeAmigos > 0) {
        let sorteado = Math.floor(Math.random() * quantidadeAmigos);
        let campoSorteado = document.getElementById('resultado');
        campoSorteado.innerHTML = `${amigos[sorteado]}`;
    } else {
        alert("Por favor, adicione um amigo antes de realizar o sorteio.");
    }
}