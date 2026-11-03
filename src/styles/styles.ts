import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./colors";

export const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: ${fonts.body};
    }

    section[id],
    div[id] {
        scroll-margin-top: 96px;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: ${colors.page};
        color: ${colors.ink};
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: ${colors.blush};
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: ${colors.pink} 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${fonts.display};
        font-weight: 400;
        color: ${colors.navy};
        font-size: 48px;
        line-height: 1.15;
        letter-spacing: -0.01em;

        @media only screen and (max-width: 890px) {
          font-size: 40px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: ${colors.ink};
        font-size: 18px;
        font-weight: 300;
        line-height: 1.65;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${colors.pink};

        :hover {
            color: ${colors.pinkHover};
        }
    }

    img {
        border-radius: 10px;
    }

    *:focus {
        outline: none;
    }

    a:focus-visible,
    button:focus-visible,
    [role="button"]:focus-visible {
        outline: 2px solid ${colors.navy};
        outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
