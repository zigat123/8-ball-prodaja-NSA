8-Ball Store — Implementation Report

Summary
- Converted the app homepage into a component-based layout with `app-navbar`, `app-content`, and `app-footer`.
- Added standalone components for navbar, navbar buttons, content (with two child cards), and footer (with links + socials).
- Added Bootstrap 4 and FontAwesome via CDN to `src/index.html` for quick styling and icons.
- Implemented placeholder English content and product categories: 8-Balls, Cues (sticks), Tables.
- Footer now contains a placeholder phone number and your email: zigaturkus@gmail.com.

Files changed / added
- `src/app/app.html` — simplified to only component tags and `router-outlet`.
- `src/app/app.ts` — imports the standalone components so Angular recognizes the tags.
- `src/index.html` — added Bootstrap 4 and FontAwesome CDNs and the small JS stack for Bootstrap behavior.
- `src/app/app.scss` — global styles (dark background, card defaults, hero badge sizing).
- `src/app/components/*` — new components: navbar, navbar-buttons, content, card-one, card-two, footer, footer-links, footer-socials.
- `REPORT.md` — this file.

Visual / design notes
- I used a dark site background so the central cards pop as light content blocks. The navbar and footer are dark-themed for contrast.
- A pulsing "HOT" badge is positioned next to the brand (`8-Ball Store`) to draw the eye.
- Content cards use Bootstrap cards and small CTAs; all text is placeholder and in English per your request.

FontAwesome icons used (examples across components)
- fas fa-sign-in-alt (login)
- fas fa-user-plus (register)
- fas fa-shopping-cart (cart / CTA)
- fas fa-circle (logo placeholder)
- fab fa-github, fab fa-twitter, fab fa-youtube, fab fa-facebook-f, fab fa-instagram (footer/socials)

How to run
1. Ensure dependencies are installed (run in project root):

   npm install

2. Start the dev server:

   ng serve --open

Notes and next steps
- I used CDNs for Bootstrap and FontAwesome to keep this quick and low-effort. If you prefer installing via npm (recommended for production), I can migrate them into `package.json` and `styles.scss`.
- I kept the content as placeholders as requested. If you want product listings, sample images or real routes (Shop, Login, Register), I can scaffold those next.
