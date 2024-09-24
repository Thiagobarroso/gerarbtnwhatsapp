const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');
const gerado = document.getElementById('gerado');
const geradoLink = document.getElementById('geradoLink');
const erroTelefone = document.querySelector('.erroTelefone');

function gerarBtn() {
  const valorTelefone = telefone.value;
  const valorMensagem = mensagem.value;

  if (valorTelefone === '') {
    erroTelefone.innerText = 'Preencher o numero de whatsapp é obrigatório';
  } else {
    gerado.innerText = `<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">
    <a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=${valorTelefone}text=${valorMensagem}">
    <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">
    </a>`;
  }
}
