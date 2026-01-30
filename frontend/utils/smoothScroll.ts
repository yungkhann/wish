export function setupSmoothScroll(selector: string) {
  const container = document.querySelector(selector);
  if (!container) return;

  const handleScroll = (e: Event) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName !== "A") return;

    const href = target.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        (element as HTMLElement).focus({ preventScroll: true });
      }
    }
  };

  container.addEventListener("click", handleScroll);
  return () => container.removeEventListener("click", handleScroll);
}
