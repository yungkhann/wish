declare global {
  interface Window {
    TelegramWebview?: unknown;
    TelegramWebviewProxy?: unknown;
  }
}

function isTelegramWebView(): boolean {
  return (
    typeof window.TelegramWebview !== "undefined" ||
    typeof window.TelegramWebviewProxy !== "undefined"
  );
}

// Workaround for Telegram's navigation bug using hidden form submission.
export function navigateTo(url: string) {
  if (isTelegramWebView()) {
    const form = document.createElement("form");
    form.method = "GET";
    form.action = url;
    form.style.display = "none";
    document.body.appendChild(form);
    form.submit();
    return;
  }

  window.location.href = url;
}
