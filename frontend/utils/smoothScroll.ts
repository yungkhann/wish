import { navigateTo } from "./navigate";

export function setupSmoothScroll(selector: string) {
  const container = document.querySelector(selector);
  if (!container) return;

  const handleScroll = (e: Event) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName !== "A") return;

    const href = target.getAttribute("href");
    if (!href) return;

    const hashMatch = href.match(/^(?:\/)?#(.+)$/);
    if (!hashMatch) return;

    const hash = "#" + hashMatch[1];

    if (window.location.pathname === "/" || window.location.pathname === "") {
      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        const offset = 60;
        const top =
          (element as HTMLElement).getBoundingClientRect().top +
          window.scrollY -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
        (element as HTMLElement).focus({ preventScroll: true });
      }
      return;
    }

    e.preventDefault();
    navigateTo("/" + hash);
  };

  container.addEventListener("click", handleScroll);
  return () => container.removeEventListener("click", handleScroll);
}
