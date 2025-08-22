const initTopbar = () => {
  const selectors = {
    hamburgerButton: '.js-hamburger-button'
  };
  const body = document.body;
  const hamburgerButton = document.querySelector(selectors.hamburgerButton);
  const tabletMediaQuery = window.matchMedia('(max-width: 61.99875em)');

  const toggleMenu = () => {
    body.classList.toggle('prevent-scroll');
    body.classList.contains('menu-open')
      ? hamburgerButton.setAttribute('aria-expanded', "false")
      : hamburgerButton.setAttribute('aria-expanded', "true");
    body.classList.toggle('menu-open');
  };

  const updateMenu = (mediaQuery) => {
    if (!mediaQuery.matches) {
      body.classList.remove('prevent-scroll');
      body.classList.remove('menu-open');
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  }

  updateMenu(tabletMediaQuery);
  hamburgerButton.addEventListener('click', toggleMenu);
  tabletMediaQuery.addEventListener('change', updateMenu);
};

export default initTopbar;
