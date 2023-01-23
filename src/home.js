function createHome() {
  const home = document.createElement('div');
  const homeLogo = document.createElement('img');
  const japaneseText = document.createElement('p');
  const englishText = document.createElement('p');

  homeLogo.src = '/dist/img/home-logo.png';
  homeLogo.alt = 'Welcome home image';
  homeLogo.classList.add('home-logo');

  home.appendChild(homeLogo);
  home.appendChild(createParagraph('ようこそ、 京都の春風へ!'));
  home.appendChild(createParagraph(`Welcome to Kyoto's Harukaze!`));
  home.appendChild(createParagraph(`We are honored to serve you since 1908.`));
  return home;
}

function createParagraph(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}
function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
  return main;
}

export default loadHome;
