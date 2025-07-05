/**
 * Creates and injects a style tag into the document head if it doesn't already exist.
 * Safe for SSR (won't run on the server).
 *
 * @param componentId - The component's uiid (e.g., 'group', 'stack')
 * @param breakpointId - The unique breakpoint identifier
 * @param breakpointValue - The breakpoint value in pixels
 * @param cssProperty - The CSS property to apply (e.g., 'flex-direction: column')
 */
export const injectBreakpointStyle = (
  componentId: string,
  breakpointId: string,
  breakpointValue: number,
  cssProperty: string
) => {
  // Skip on server-side rendering
  if (typeof window === "undefined") return;

  // Create a unique ID for the style element
  const styleId = `${componentId}-style-${breakpointId}`;

  // Check if the style already exists
  const existingStyle = document.getElementById(styleId);

  // Only create and append if the style doesn't exist
  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = styleId;
    style.setAttribute("type", "text/css");
    style.textContent = `
    :where(*:has(> [uiid="${componentId}"][data-switch="${breakpointId}"])) {
      container-type: inline-size;
      width: 100%;
      @container (width <= ${breakpointValue}px) {
        [uiid="${componentId}"][data-switch="${breakpointId}"] { ${cssProperty} }
      }
    }`;
    document.head.appendChild(style);
  }
};
