// Create the whole menu
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-main');

  menu.appendChild(createMenuItem('sushi1', 'Futomaki'));
  menu.appendChild(createMenuItem('sushi2', 'Mix Sushi Rolls'));
  menu.appendChild(createMenuItem('ramen1', 'Naruto Special Ramen'));
  menu.appendChild(createMenuItem('udon', `Chef's Legendary Udon`));
  menu.appendChild(createMenuItem('bbqset', 'BBQ Lunch Set'));
  menu.appendChild(createMenuItem('omurice', 'Omurice'));
  menu.appendChild(createMenuItem('onigiri', 'Tuna Mayo Onigiri'));
  menu.appendChild(createMenuItem('gyoza', 'Gyoza'));
  menu.appendChild(createMenuItem('yakitori', 'Yakitori'));

  return menu;
}

// Create menu items
function createMenuItem(itemName, itemDescription) {
  const menuItemGroup = document.createElement('div');
  const menuItemImg = document.createElement('img');
  const menuItemText = document.createElement('p');

  menuItemImg.src = `img/${itemName}.png`;
  menuItemImg.alt = `${itemName} photo as menu item`;
  menuItemText.textContent = itemDescription;

  menuItemImg.classList.add('menu-img');
  menuItemGroup.classList.add('menu-group');

  menuItemGroup.appendChild(menuItemImg);
  menuItemGroup.appendChild(menuItemText);
  return menuItemGroup;
}

// Load menu on main
function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
  return main;
}

export default loadMenu;
