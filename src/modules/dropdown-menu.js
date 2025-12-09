const initDropdownMenu = () => {
  const selectors = {
    root: '.js-dropdown-menu',
    menuToggle: '.js-dropdown-menu-toggle',
    menuList: '.js-dropdown-menu-list'
  };

  const stateClasses = {
    open: 'open'
  };

  const dropdowns = document.querySelectorAll(selectors.root);

  dropdowns.forEach((dropdown) => {
    const menuToggle = dropdown.querySelector(selectors.menuToggle);
    const menu = dropdown.querySelector(selectors.menuList);

    dropdown.addEventListener('mouseenter', () => {
      menuToggle.setAttribute('aria-expanded', 'true');
      menu.classList.add(stateClasses.open);
    });

    dropdown.addEventListener('mouseleave', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove(stateClasses.open);
    });

    menuToggle.addEventListener('click', () => {
      const opened = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', `${!opened}`);
      menu.classList.toggle(stateClasses.open);
    });
  });
};

export default initDropdownMenu;
