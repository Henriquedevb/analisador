let ver = window.document.getElementById('ver');
let valor = window.document.getElementById('valor');
let res = window.document.getElementById('res');

let dados = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function lista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }

}

function adicionar() {
    if(isNumero(ver.value) && !lista(ver.value, dados)) {
        dados.push(Number(ver.value));
        let item = document.createElement('option')
        item.text = `Valor ${ver.value} adicionado.`
        valor.appendChild(item);
        res.innerHTML = '';
        

    } else {
        window.alert('Valor invalido ou já econtrado na lista!')
    }
    ver.value = '';
    ver.focus();

}


function verificar() {
    if(dados.length == 0) {
        window.alert('Adicione valores antes de finalizar.');

    } else {
        let total = dados.length;
        let maior = dados[0];
        let menor = dados[0];
        let soma = 0;
        let media = 0;

        for(let pos in dados) {
            soma += dados[pos]
            media += dados[pos] / dados.length
            if(dados[pos] > maior) 
                maior = dados[pos];
            
            if(dados[pos] < menor) 
                menor = dados[pos];
            
        } 


        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados. </p>`;
        res.innerHTML += `<P> o maior número é: ${maior}</p>`;
        res.innerHTML += `<p> o menor número é: ${menor}</p>`;
        res.innerHTML += `<p> a soma dos números é: ${soma}`;
        res.innerHTML += `<p> A media é ${media.toFixed(2)}<p/>`

    }

}
function limpartela() {
    res.innerHTML = '' ;
}