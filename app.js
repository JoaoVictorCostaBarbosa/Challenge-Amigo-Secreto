let amigos =  [];

function adicionarAmigo() {
    const campoNome = document.getElementById('amigo');
    const nome = campoNome.value.trim();
    if (nome != '') {
        amigos.push(nome);
        campoNome.value = '';
    } else {
        alert('Por favor, insira um nome.');
    }
}
