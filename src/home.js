function createHome() {
  const home = document.createElement('div');
  const homeText = document.createElement('p');
  homeText.textContent = 'Test123';
  home.appendChild(homeText);
  return home;
}
function loadHome() {
  const main = document.getElementById('main');
  main.appendChild(createHome());
  return main;
}

export default loadHome;
