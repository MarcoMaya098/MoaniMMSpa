import { css, keyframes } from "styled-components";

// Shared motion tokens: a soft "ease-out-expo" curve and the hover lift used by every pill CTA.
export const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

export const lift = css`
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease,
    transform 0.35s ${ease}, box-shadow 0.35s ${ease};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px -10px rgba(244, 71, 129, 0.65);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px -6px rgba(244, 71, 129, 0.6);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -10px, 0);
  }
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
