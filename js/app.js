let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nomeAmigo = amigo.value;
    let listaAmigos = document.getElementById('lista-amigos');
    if(amigos.includes(nomeAmigo) || nomeAmigo == '') {
        alert('Nome repetido ou espaço vazio!')
        amigo.value = '';
    } else {
        amigos.push(amigo.value);
        if(listaAmigos.textContent == '') {
            listaAmigos.textContent = nomeAmigo;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + `, ${nomeAmigo}`;
        }
        amigo.value = '';
    }
}

function sortear() {
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    if(amigos.length <= 2) {
        alert('Número de participantes insuficiente!')
    } else {
        for(let i = 0; i < amigos.length; i++) {

            if(i == amigos.length -1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }

    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    amigos = [];
}