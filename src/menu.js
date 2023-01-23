function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-main');
  menu.appendChild(createMenuItem('sushi1', 'Fat Roll Set'));
  menu.appendChild(createMenuItem('sushi2', 'Mix Sushi Set'));
  menu.appendChild(createMenuItem('ramen1', 'Naruto Hokage Special'));
  menu.appendChild(createMenuItem('udon', `Chef's special Udon`));
  menu.appendChild(createMenuItem('bbqset', 'BBQ Lunch Set'));
  menu.appendChild(createMenuItem('omurice', 'Omurice'));
  menu.appendChild(createMenuItem('onigiri', 'Tuna Mayo Onigiri'));
  menu.appendChild(createMenuItem('gyoza', 'Gyoza'));
  menu.appendChild(createMenuItem('yakitori', 'Yakitori'));
  return menu;
}

function createMenuItem(itemName, itemDescription) {
  const menuItemGroup = document.createElement('div');
  const menuItemImg = document.createElement('img');
  const menuItemText = document.createElement('p');

  menuItemImg.src = `/dist/img/${itemName}.png`;
  menuItemImg.alt = `${itemName} photo as menu item`;
  menuItemText.textContent = itemDescription;

  menuItemImg.classList.add('menu-img');
  menuItemGroup.classList.add('menu-group');

  menuItemGroup.appendChild(menuItemImg);
  menuItemGroup.appendChild(menuItemText);
  return menuItemGroup;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
  return main;
}
export default loadMenu;
