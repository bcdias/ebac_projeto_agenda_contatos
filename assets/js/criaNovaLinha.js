export default function criaNovaLinha(nome, telefone){
    let novaLinha = document.createElement('tr')

    const dadosContato = ` 
    <td>${nome}</td>
    <td>${telefone}</td>
    `
    novaLinha.innerHTML = dadosContato
    return novaLinha
}