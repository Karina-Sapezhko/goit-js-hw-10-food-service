const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('.js-switch-input');

const handelChange = event => {
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else if (!event.target.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
};
switchRef.addEventListener('change', handelChange);

function stabilTheme() {
  const defaultTheme = localStorage.getItem('theme');

  if (defaultTheme === Theme.DARK) {
    switchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else if (defaultTheme === Theme.LIGHT) {
    switchRef.checked = false;
    bodyRef.classList.add(Theme.LIGHT);
  }
}
stabilTheme();
