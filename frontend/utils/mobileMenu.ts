export function setupMobileMenu(config: {
  btnId: string;
  menuId: string;
  hamburgerId: string;
  closeId: string;
  linksSelector: string;
}) {
  const btn = document.getElementById(config.btnId);
  const menu = document.getElementById(config.menuId);
  const hamburger = document.getElementById(config.hamburgerId);
  const close = document.getElementById(config.closeId);
  const links = document.querySelectorAll(config.linksSelector);

  if (!btn || !menu || !hamburger || !close) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    menu!.classList.remove("mobile-menu-closed");
    menu!.classList.add("mobile-menu-open");
    menu!.setAttribute("aria-hidden", "false");
    btn!.setAttribute("aria-expanded", "true");
    hamburger!.classList.add("hidden");
    close!.classList.remove("hidden");
  }

  function closeMenu() {
    isOpen = false;
    menu!.classList.remove("mobile-menu-open");
    menu!.classList.add("mobile-menu-closed");
    menu!.setAttribute("aria-hidden", "true");
    btn!.setAttribute("aria-expanded", "false");
    hamburger!.classList.remove("hidden");
    close!.classList.add("hidden");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (isOpen && !menu!.contains(target) && !btn!.contains(target)) {
      closeMenu();
    }
  });
}
