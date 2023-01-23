// Create header
function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerLogo = document.createElement('img');
  const logoText = document.createElement('h1');
  const logoGroup = document.createElement('div');

  headerLogo.src = 'img/logo.png';
  headerLogo.alt = 'Restaurant logo';
  logoText.textContent = `Kyoto's Harukaze`;

  headerLogo.classList.add('logo');
  logoText.classList.add('logo-text');
  logoGroup.classList.add('logo-group');

  logoGroup.appendChild(headerLogo);
  logoGroup.appendChild(logoText);
  header.appendChild(logoGroup);
  header.appendChild(createNavBar());

  return header;
}

// Create navbar
function createNavBar() {
  const navBar = document.createElement('div');

  const btnHome = document.createElement('button');
  const btnAboutUs = document.createElement('button');
  const btnContact = document.createElement('button');

  btnHome.textContent = 'Home';
  btnAboutUs.textContent = 'About Us';
  btnContact.textContent = 'Contact Us';

  btnHome.classList.add('nav-button');
  btnAboutUs.classList.add('nav-button');
  btnContact.classList.add('nav-button');

  navBar.appendChild(btnHome);
  navBar.appendChild(btnAboutUs);
  navBar.appendChild(btnContact);

  return navBar;
}

// Create main
function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  return main;
}
function createFooter() {
  const footer = document.createElement('footer');
  const githubIcon = document.createElement('i');
  const githubLink = document.createElement('a');
  const githubName = document.createElement('p');

  githubLink.href = 'https://github.com/oguzhanmolu';
  githubName.textContent = 'oguzhanmolu';

  footer.classList.add('footer');
  githubIcon.classList.add('fa-brands');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
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
}
export default initializeFirstLoad;
