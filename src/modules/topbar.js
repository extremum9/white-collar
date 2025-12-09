import { toEm } from './utilities.js';

const initTopbar = () => {
  const selectors = {
    hamburgerButton: '.js-hamburger-button'
  };

  const stateClasses = {
    preventScroll: 'prevent-scroll',
    menuOpen: 'menu-open'
  };

  const body = document.body;
  const hamburgerButton = document.querySelector(selectors.hamburgerButton);
  const tabletMediaQuery = window.matchMedia(`(max-width: ${toEm(991.98)})`);

  const toggleMenu = () => {
    body.classList.toggle(stateClasses.preventScroll);
    body.classList.contains(stateClasses.menuOpen)
      ? hamburgerButton.setAttribute('aria-expanded', 'false')
      : hamburgerButton.setAttribute('aria-expanded', 'true');
    body.classList.toggle(stateClasses.menuOpen);
  };

  const resetMenu = (mediaQuery) => {
    if (!mediaQuery.matches) {
      body.classList.remove(stateClasses.preventScroll);
      body.classList.remove(stateClasses.menuOpen);
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  };

  hamburgerButton.addEventListener('click', toggleMenu);
  tabletMediaQuery.addEventListener('change', resetMenu);
  resetMenu(tabletMediaQuery);
};

export default initTopbar;
