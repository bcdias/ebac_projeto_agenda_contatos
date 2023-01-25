import criaNovaLinha from "./criaNovaLinha.js";
import limpaInputs from "./limpaInputs.js";

const formulario = document.querySelector('[data-formulario]');
const inputNome = document.querySelector('[data-input="nome"]');
const inputTelefone = document.querySelector('[data-input="telefone"]');
const corpoTabela = document.querySelector('[data-tabela="corpo"]');


formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = inputNome.value;
    const telefone = inputTelefone.value;
    
    const novaLinha = criaNovaLinha(nome, telefone)
    limpaInputs(inputNome, inputTelefone)

    corpoTabela.appendChild(novaLinha)
})

