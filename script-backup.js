//localStorage
// const cnome = document.querySelector('input[name=nome]');
// const cemail = document.querySelector('input[name=email]');
// const btEuQuero = document.querySelector('button[name=btEuQuero]');

// btEuQuero.onclick = () => {
//   localStorage.setItem(['nome'], cnome.value);
//   localStorage.setItem(['email'], cemail.value);
// };

// ----------------------------------------------------------------------------------

function enviarDados() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const pagamento = document.getElementById('pagamento').value;
}

// ----------------------------------------------------------------------------------

function enviar() {
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var nomeValue = document.querySelector('.js-input-name').value;
  var emailValue = document.querySelector('.js-input-email').value;
  var cpfValue = document.querySelector('.js-input-cpf').value;
  var pagamentoValue = document.querySelector('.js-input-pagamento').value;

  var formValue = {
    name: nomeValue,
    email: emailValue,
    data: {
      cpf: cpfValue,
      pagamento: pagamentoValue,
    },
  };
  console.log(formValue);
}

// ----------------------------------------------------------------------------------

let pessoa = { nome: 'Matheus', idade: 29 };

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

console.log(pessoaObj.nome); // Matheus
