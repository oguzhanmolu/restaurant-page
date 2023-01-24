// Create and append menu items
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

// Function for creating single menu item
function createMenuItem(itemName, itemDescription) {
  const menuItemGroup = document.createElement('div');
  menuItemGroup.classList.add('menu-group');

  const menuItemImg = document.createElement('img');
  menuItemImg.src = `img/${itemName}.png`;
  menuItemImg.alt = `${itemName} photo as menu item`;
  menuItemImg.classList.add('menu-img');
  menuItemGroup.appendChild(menuItemImg);

  const menuItemText = document.createElement('p');
  menuItemText.textContent = itemDescription;
  menuItemGroup.appendChild(menuItemText);

  return menuItemGroup;
}

// Append menu on main
function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
  return main;
}

export default loadMenu;
