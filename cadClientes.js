cadastroCliente = () => {};
const cadClientes = document.querySelector('#cadClientes');
cadClientes.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.querySelector('#nome').value;
  const dataNascimento = document.querySelector('#dataNascimento').value;
  const email = document.querySelector('#email').value;
  const rua = document.querySelector('#rua').value;
  const numero = document.querySelector('#numero').value;
  const bairro = document.querySelector('#bairro').value;
  const cidade = document.querySelector('#cidade').value;
  const cep = document.querySelector('#cep').value;
  const estado = document.querySelector('#estado').value;
  const gravar = document.querySelector('#gravar').value;

  const dadosCliente = {
    nome,
    dataNascimento,
    email,
    rua,
    numero,
    bairro,
    cidade,
    cep,
    estado,
  };

  dadosClienteJson = JSON.stringify(dadosCliente);
  localStorage.setItem('cliente', dadosClienteJson);
  alert('Salvo com sucesso');
});
cadastroCliente();
