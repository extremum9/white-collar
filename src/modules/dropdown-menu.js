const initDropdownMenu = () => {
  const selectors = {
    dropdownMenu: ".js-dropdown-menu",
    dropdownMenuToggle: ".js-dropdown-menu-toggle",
    dropdownMenuList: ".js-dropdown-menu-list",
  };
  const stateClasses = {
    open: "open",
  };

  const dropdowns = document.querySelectorAll(selectors.dropdownMenu);

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(selectors.dropdownMenuToggle);
    const menu = dropdown.querySelector(selectors.dropdownMenuList);

    dropdown.addEventListener("mouseenter", () => {
      toggle.setAttribute("aria-expanded", "true");
      menu.classList.add(stateClasses.open);
    });

    dropdown.addEventListener("mouseleave", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove(stateClasses.open);
    });

    toggle.addEventListener("click", () => {
      const opened = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", `${!opened}`);
      menu.classList.toggle(stateClasses.open);
    });
  });
};

export default initDropdownMenu;
