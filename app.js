//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

// Função exibirMensagemInicial()
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('p', 'Adicione amigos e depois sorteie!');
}

// Função adicionarAmigo()
function adicionarAmigo() {
    let campoEntrada = document.querySelector('input');
    let nomeAmigo = campoEntrada.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Reinicia o jogo caso novos nomes sejam adicionados
    if (document.getElementById("resultadoSorteio").textContent !== "") {
        listaDeAmigos = [];
        atualizarListaNaTela();
        document.getElementById("resultadoSorteio").textContent = "";
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaNaTela();
    campoEntrada.value = "";
}

// Função para atualizar a lista na tela
function atualizarListaNaTela() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaDeAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

// Função sortearAmigoSecreto()
function sortearAmigoSecreto() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }
    
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    
    let resultadoTexto = document.getElementById("resultadoSorteio");
    resultadoTexto.innerHTML = `<strong style="font-size: 1.5em; color: green;">O amigo secreto sorteado é: ${amigoSorteado}</strong>`;
}