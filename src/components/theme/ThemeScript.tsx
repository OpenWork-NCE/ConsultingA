/**
 * Inline boot script — runs synchronously in <head> before React hydrates,
 * so the correct theme class is on <html> before first paint (no FOUC).
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`.trim();

export function ThemeScript() {
  return (
    <script
      // Boot script — must run before hydration
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
