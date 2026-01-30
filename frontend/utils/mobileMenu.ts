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

  function toggleMenu() {
    const isHidden = menu?.classList.contains("hidden");

    if (isHidden) {
      menu?.classList.remove("hidden");
      hamburger?.classList.add("hidden");
      close?.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
      hamburger?.classList.remove("hidden");
      close?.classList.add("hidden");
    }
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (!menu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      !menu.classList.contains("hidden") &&
      !menu.contains(target) &&
      !btn.contains(target)
    ) {
      toggleMenu();
    }
  });
}
