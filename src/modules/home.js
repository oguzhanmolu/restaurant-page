// Create home and append elements
function createHome() {
  const homeLogo = document.createElement('img');
  homeLogo.src = 'img/home-logo.png';
  homeLogo.alt = 'Welcome home image';
  homeLogo.classList.add('home-logo');

  const home = document.createElement('div');
  home.appendChild(homeLogo);
  home.appendChild(createParagraph('ようこそ、 京都の春風へ!'));
  home.appendChild(createParagraph(`Welcome to Kyoto's Harukaze!`));
  home.appendChild(createParagraph(`We are honored to serve you since 1908.`));

  return home;
}

// Create text element
function createParagraph(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

// Append home on main
function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
  return main;
}

export default loadHome;
