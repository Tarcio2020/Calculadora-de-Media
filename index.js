
const form = document.getElementById('Atividade');
const imgAprovado = '<img src="./imagens_proj_2/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./imagens_proj_2/reprovado.png" alt="Emoji decepcionado"/>'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota Mínima:'))



let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal()
})


function adcionaLinha () {

    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já existe!`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseInt(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '<tr>';
    
        linhas += linha;    
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
 
function atualizaMediaFinal () {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(mediaFinal)
}

function calculaMedia () {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}


/*
    CÓDIGO PARA ADD ELEMENTOS NA TELA

const form = document.getElementById('Atividade');
const imgAprovado = '<img src="./imagens_proj_2/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./imagens_proj_2/reprovado.png" alt="Emoji decepcionado"/>'

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
})

*/