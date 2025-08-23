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
  const tabletMediaQuery = window.matchMedia('(max-width: 61.99875em)');

  const toggleMenu = () => {
    body.classList.toggle(stateClasses.preventScroll);
    body.classList.contains(stateClasses.menuOpen)
      ? hamburgerButton.setAttribute('aria-expanded', "false")
      : hamburgerButton.setAttribute('aria-expanded', "true");
    body.classList.toggle(stateClasses.menuOpen);
  };

  const updateMenu = (mediaQuery) => {
    if (!mediaQuery.matches) {
      body.classList.remove(stateClasses.preventScroll);
      body.classList.remove(stateClasses.menuOpen);
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  }

  updateMenu(tabletMediaQuery);
  hamburgerButton.addEventListener('click', toggleMenu);
  tabletMediaQuery.addEventListener('change', updateMenu);
};

export default initTopbar;
