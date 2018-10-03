const tabela = document.querySelector(".extrato__table");
const botao = document.querySelector(".transacao__button");
const inputNome = document.getElementById("transacaoInputName");
const inputValor = document.getElementById("transacaoInputMoney");
const inputData = document.getElementById("transacaoInputDate");

botao.addEventListener("click", function(event){
event.preventDefault();

const linha = document.createElement('tr');
const colunaNome = document.createElement('td');
const colunaValor = document.createElement('td');
const colunaData = document.createElement('td');

const nomeTexto = document.createTextNode(inputNome.value);
const nomeValor = document.createTextNode(inputValor.value);
const nomeData = document.createTextNode(inputData.value);

colunaNome.appendChild(nomeTexto);
colunaValor.appendChild(nomeValor);
colunaData.appendChild(nomeData);

linha.appendChild(colunaNome);
linha.appendChild(colunaValor);
linha.appendChild(colunaData);

tabela.appendChild(linha);

})