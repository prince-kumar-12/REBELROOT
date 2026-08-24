const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('omni-docs-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

/**
 * Sets the theme attribute on <html> before hydration/paint to avoid
 * a flash of the wrong theme. Runs in <head>.
 */
export function ThemeInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
