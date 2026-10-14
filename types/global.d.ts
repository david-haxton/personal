import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * <dh-island> is the canvas illustration shipped as a custom element in
 * public/island.js. React passes these attributes straight through.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dh-island": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          time?: string;
          spot?: string;
          zoomto?: string;
          interactive?: string;
          hreftuition?: string;
          hrefai?: string;
          hrefweb?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
