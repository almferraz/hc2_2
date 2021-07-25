//localStorage Newslatter
newslatter = () => {
  const news = document.getElementById('news');
  news.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const btEuQuero = document.getElementById('btEuQuero]');
    const newslatter = {
      nome,
      email,
    };
    newslatterJson = JSON.stringify(newslatter);
    localStorage.setItem('cliente', newslatterJson);
    alert('Salvo com sucesso');
  });
};
newslatter();
