import itemsTemplate from '../templates/items.hbs';
import menuItems from '../menu.json';

const items = itemsTemplate(menuItems);
const listMenu = document.querySelector('.menu');
listMenu.insertAdjacentHTML('beforeend', items);
