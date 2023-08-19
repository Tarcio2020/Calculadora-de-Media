
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
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
})

/*


const form = document.getElementById('seuFormulario'); // Substitua 'seuFormulario' pelo ID correto do seu formulário
const imgAprovado = '<img src="caminho-para-imagem-aprovado">';
const imgReprovado = '<img src="caminho-para-imagem-reprovado">';
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>'; // Fechar a linha corretamente

    linhas += linha;

    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});

*/