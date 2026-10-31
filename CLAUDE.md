# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Moani, a spa (Spanish-language by default). It is a Create React App (react-scripts 5) + TypeScript single-page app, built from a landing-page template (`template.json` is a leftover from that template), and deployed to GitHub Pages at https://MarcoMaya098.github.io/MoaniMMSpa.

## Commands

- `npm start` — dev server
- `npm run build` — production build into `build/`
- `npm run deploy` — builds (via `predeploy`) and publishes `build/` to the `gh-pages` branch
- `npm test` — Jest via react-scripts (there are currently no test files); run one file with `npm test -- <pattern>`
- Linting is CRA's built-in `react-app` ESLint config, surfaced during `start`/`build`; there is no separate lint script.

## Architecture

- **Entry / routing**: `src/index.tsx` wraps the app in `BrowserRouter basename="/MoaniMMSpa"` (must match the GitHub Pages path in `package.json` `homepage`) and the i18next provider. `src/router/config.ts` lists routes as `{ path, component }` where `component` is a **string** naming a folder under `src/pages/`; `src/router/index.tsx` lazy-loads each via a dynamic `import(\`../pages/${component}\`)`. Adding a page = new folder in `src/pages/` + entry in `config.ts` + a link in `src/components/Header`. Header and Footer render on every route. React Router is v5 (`Switch`, `component=`), not v6.
- **Content is i18n keys, not text**: Components call `t(...)` on every title/content prop. The JSON files in `src/content/` hold translation *keys* (and a `redirect` route slug used for "Show more" buttons), and pages like `Products`, `BasicServices`, `SpecialServices` pass key strings directly as props. Actual copy lives in `src/locales/es/translation.json` and `src/locales/en/translation.json`. i18n is configured with `lng`/`fallbackLng: "es"` and `keySeparator: false`, so keys can be arbitrary sentences containing dots. When adding or changing copy, edit the locale files (at least `es`). Note: product names on the Products page are passed as titles and simply fall through `t()` untranslated.
- **Images**: `SvgIcon` / `imagePath()` (`src/common/SvgIcon`) resolve `${PUBLIC_URL}/img/svg/${src}` — all images (jpg/png/jpeg too, despite the folder name) go in `public/img/svg/` and are referenced by bare filename, including names with spaces/accents.
- **Design tokens**: brand colors (pink `#F44781`, navy `#18216d`, blush tints) and fonts (Marcellus display, Jost body — loaded from Google Fonts in `public/index.html`) live in `src/styles/colors.ts`; import them rather than hard-coding hex values. Global element styles are in `src/styles/styles.ts`; antd CSS is imported in `src/index.tsx`.
- **Contact data**: phone, WhatsApp, email, address and map URLs are defined once in `src/common/contact.ts` and used by the header CTA, hero, visit/booking sections, footer and the floating `WhatsAppButton` (rendered globally in the router).
- **Section components** (`src/components/*`): each has `index.tsx`, `styles.ts` (styled-components), and sometimes `types.ts`. The home page is composed of `IntroContentBlock` (hero), `FeaturedServices`, `MissionVision`, `VisitBlock` and `BookingBlock`, laid out with CSS grid. The service/product subpages still use the older antd `Row`/`Col` blocks (`ContentBlock`, `ContentBlockReverse`, `MiddleBlock`). Section `id`s are scroll targets; the header is sticky, so a global `scroll-margin-top` offsets them. Navigating to `/` with router state `{ scrollTo: "<id>" }` makes Home scroll to that section (used by the header's "Visítanos" link from other pages).

## Gotchas

- Deep links (e.g. `/MoaniMMSpa/products`) are served by GitHub Pages without a SPA 404 fallback, so a hard refresh on a sub-route may 404.
