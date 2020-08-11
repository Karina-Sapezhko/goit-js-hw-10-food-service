const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('.js-switch-input');

let updateLocalStorage = str => {
  localStorage.setItem('theme', str);
};
let updateClassEl = str => {
  bodyRef.classList.add(str);
};
let removeClassEl = () => {
  bodyRef.classList.remove(Theme.DARK, Theme.LIGHT);
};

const handelChange = event => {
  if (event.target.checked) {
    updateLocalStorage(Theme.DARK);
    removeClassEl();
    updateClassEl(Theme.DARK);
  } else if (!event.target.checked) {
    updateLocalStorage(Theme.LIGHT);
    removeClassEl();
    updateClassEl(Theme.LIGHT);
  }
};
switchRef.addEventListener('change', handelChange);

function stabilTheme() {
  const defaultTheme = localStorage.getItem('theme');

  if (defaultTheme === Theme.DARK) {
    switchRef.checked = true;
    updateClassEl(Theme.DARK);
  } else if (defaultTheme === Theme.LIGHT) {
    switchRef.checked = false;
    updateClassEl(Theme.LIGHT);
  }
}
stabilTheme();
