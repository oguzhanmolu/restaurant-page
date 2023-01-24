import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Create header
function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const logoGroup = document.createElement('div');
  logoGroup.classList.add('logo-group');

  const headerLogo = document.createElement('img');
  headerLogo.src = 'img/logo.png';
  headerLogo.alt = 'Restaurant logo';
  headerLogo.classList.add('logo');
  logoGroup.appendChild(headerLogo);

  const logoText = document.createElement('h1');
  logoText.textContent = `Kyoto's Harukaze`;
  logoText.classList.add('logo-text');
  logoGroup.appendChild(logoText);

  header.appendChild(logoGroup);
  header.appendChild(createNavBar());

  return header;
}

// Create navbar
function createNavBar() {
  const navBar = document.createElement('div');

  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';
  btnHome.classList.add('nav-button');
  navBar.appendChild(btnHome);

  const btnMenu = document.createElement('button');
  btnMenu.textContent = 'Menu';
  btnMenu.classList.add('nav-button');
  navBar.appendChild(btnMenu);

  const btnContact = document.createElement('button');
  btnContact.textContent = 'Contact Us';
  btnContact.classList.add('nav-button');
  navBar.appendChild(btnContact);

  // Load navbar section
  btnHome.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-button')) return;

    loadHome();
    setActiveButton(btnHome);
  });

  btnMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-button')) return;

    loadMenu();
    setActiveButton(btnMenu);
  });

  btnContact.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-button')) return;

    loadContact();
    setActiveButton(btnContact);
  });

  return navBar;
}

// Add white background for navbar selection
function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((btn) => {
    if (btn !== this) btn.classList.remove('active-button');
  });

  button.classList.add('active-button');
}

// Create main
function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

// Create footer
function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fa-brands');
  githubIcon.classList.add('fa-github');

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/oguzhanmolu';
  githubLink.appendChild(githubIcon);

  const githubName = document.createElement('p');
  githubName.textContent = 'oguzhanmolu';

  footer.appendChild(githubLink);
  footer.appendChild(githubName);

  return footer;
}

// Initialize page at the start
function initializeFirstLoad() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.nav-button'));
  loadHome();
}

export default initializeFirstLoad;
