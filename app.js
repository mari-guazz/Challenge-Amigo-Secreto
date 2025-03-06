//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array global para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    // Pega o valor do input de nome
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();
    
    // Verifica se o nome não está vazio
    if (nomeAmigo) {
        // Adiciona o nome ao array de amigos
        amigos.push(nomeAmigo);
        
        // Atualiza a lista na tela
        atualizarListaAmigos();
        
        // Limpa o campo de input após adicionar
        amigoInput.value = '';
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

function atualizarListaAmigos() {
    // Pega o elemento da lista não ordenada
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de atualizar
    listaAmigos.innerHTML = '';

    // Adiciona cada amigo da lista ao HTML
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há amigos para sortear
    if (amigos.length === 0) {
        alert('Não há amigos para sortear! Adicione nomes primeiro.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Cria o item de resultado
    const resultadoLista = document.getElementById('resultado');
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultadoLista.innerHTML = ''; // Limpa o resultado anterior
    resultadoLista.appendChild(liResultado);

    // Remove o amigo sorteado do array
    amigos.splice(indiceAleatorio, 1);

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}