import { CSSProperties, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

// Scroll reveal for any element marked with data-reveal ("up" by default, or "left", "right", "zoom"):
// it eases into place the first time it enters the viewport. One observer serves the whole app, and a
// MutationObserver picks up sections that mount later (lazy routes), so no wrapper divs are needed.
export const RevealStyles = createGlobalStyle`
  [data-reveal] {
    opacity: 0;
    transform: translate3d(0, 32px, 0);
    transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--reveal-delay, 0ms);
  }

  [data-reveal="left"] {
    transform: translate3d(-40px, 0, 0);
  }

  [data-reveal="right"] {
    transform: translate3d(40px, 0, 0);
  }

  [data-reveal="zoom"] {
    transform: scale(0.94);
  }

  [data-reveal].is-revealed {
    opacity: 1;
    transform: none;
  }

  /*
   * Curtains: the marked element stays unclipped (a clipped target never counts as intersecting),
   * and its child is wiped open while the image settles from a slight zoom.
   * "clip" opens upward, "clip-left" / "clip-right" sideways, "clip-circle" as an iris from the center.
   */
  [data-reveal^="clip"] {
    opacity: 1;
    transform: none;
  }

  [data-reveal^="clip"] > * {
    clip-path: inset(100% 0 0 0);
    transition: clip-path 1.1s cubic-bezier(0.65, 0, 0.35, 1);
    transition-delay: var(--reveal-delay, 0ms);
  }

  [data-reveal="clip-left"] > * {
    clip-path: inset(0 100% 0 0);
  }

  [data-reveal="clip-right"] > * {
    clip-path: inset(0 0 0 100%);
  }

  [data-reveal="clip-circle"] > * {
    clip-path: circle(0% at 50% 50%);
    transition-duration: 1.3s;
  }

  [data-reveal^="clip"] img {
    transform: scale(1.15);
    transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--reveal-delay, 0ms);
  }

  [data-reveal^="clip"].is-revealed > * {
    clip-path: inset(0 0 0 0);
  }

  [data-reveal="clip-circle"].is-revealed > * {
    clip-path: circle(75% at 50% 50%);
  }

  [data-reveal^="clip"].is-revealed img {
    transform: none;
  }

  /* "line": an accent rule that draws itself from the left. */
  [data-reveal="line"] {
    opacity: 1;
    transform: scaleX(0);
    transform-origin: left center;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-reveal],
    [data-reveal^="clip"] > *,
    [data-reveal] img {
      opacity: 1;
      transform: none;
      clip-path: none;
      transition: none;
    }
  }
`;

// Stagger siblings: <Item data-reveal style={revealDelay(i * 120)} />
export const revealDelay = (ms: number) => ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

const SELECTOR = "[data-reveal]:not(.is-revealed)";

const RevealObserver = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const observeAll = () => document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

export default RevealObserver;
