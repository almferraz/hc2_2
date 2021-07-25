cadastroProdutos = () => {};
const cadProdutos = document.querySelector('#cadProdutos');
cadProdutos.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.querySelector('#nome').value;
  const marca = document.querySelector('#marca').value;
  const modelo = document.querySelector('#modelo').value;
  const cor = document.querySelector('#cor').value;
  const preco = document.querySelector('#preco').value;

  const dadosProdutos = {
    nome,
    marca,
    modelo,
    cor,
    preco,
  };

  dadosProdutosJson = JSON.stringify(dadosProdutos);
  localStorage.setItem('produto', dadosProdutosJson);
  alert('Salvo com sucesso');
});
cadastroProdutos();
