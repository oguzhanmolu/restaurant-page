function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerLogo = document.createElement('img');
  headerLogo.src = '/dist/img/logo.png';
  headerLogo.alt = 'Restaurant logo';
  headerLogo.classList.add('logo');

  const headerText = document.createElement('h1');
  headerText.classList.add('logo-text');
  headerText.textContent = `Kyoto's Harukaze`;

  const logoGroup = document.createElement('div');
  logoGroup.classList.add('logo-group');
  logoGroup.appendChild(headerLogo);
  logoGroup.appendChild(headerText);
  header.appendChild(logoGroup);

  return header;
}

function createNav() {}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  return main;
}
function initializeFirstLoad() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
}
export default initializeFirstLoad;
