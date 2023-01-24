// Create contact and append elements
function createContact() {
  const contact = document.createElement('div');
  const adressText = document.createElement('p');
  const phoneText = document.createElement('p');
  const mailText = document.createElement('p');
  const map = document.createElement('iframe');

  adressText.textContent =
    '601-8417 Nishikujo Toriiguchicho, Minami Ward, Kyoto.';
  phoneText.textContent = '+70-9999-1234';
  mailText.textContent = 'kyotonoharukaze@gmail.com';
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13074.270813904059!2d135.74082803980906!3d34.992491522035806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108a97fae4bf1%3A0x742487efb2e95a14!2sAEON%20MALL%20KYOTO!5e0!3m2!1sen!2str!4v1674494265760!5m2!1sen!2str';

  map.classList.add('map');

  contact.appendChild(adressText);
  contact.appendChild(phoneText);
  contact.appendChild(mailText);
  contact.appendChild(map);

  return contact;
}

// Append contact on main
function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
  return main;
}

export default loadContact;
