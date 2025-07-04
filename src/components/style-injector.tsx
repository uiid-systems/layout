"use client";

import { useEffect, useState } from "react";

export interface StyleInjectorProps {
  /**
   * Unique identifier for the style element
   */
  id: string;
  /**
   * CSS content to inject
   */
  css: string;
}

/**
 * StyleInjector component that works with SSR
 * - Renders a style tag with the provided CSS for server-side rendering
 * - On the client, it attaches the style to the document head to ensure it's properly applied
 */
export const StyleInjector = ({ id, css }: StyleInjectorProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side style injection
  useEffect(() => {
    setIsMounted(true);

    // Check if the style already exists to prevent duplicates
    const existingStyle = document.getElementById(id);
    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = css;
      document.head.appendChild(style);
    }

    // Cleanup function to remove the style when the component unmounts
    return () => {
      const style = document.getElementById(id);
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [id, css]);

  // For SSR, we need to render the style tag
  // On the client after hydration, we can skip rendering it since it's added to the head
  if (isMounted) {
    return null;
  }

  // This will only be rendered during SSR
  return <style id={id} dangerouslySetInnerHTML={{ __html: css }} />;
};
