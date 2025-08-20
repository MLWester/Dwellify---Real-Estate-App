## Dwellify – Real Estate Landing + Signup

A modern, responsive real estate landing page and signup experience built with React 19, Vite, Tailwind CSS, and Motion. It features polished animations, a responsive projects carousel, smooth cross-route section navigation, and a frosted-glass mobile menu.

### Highlights
- Production-quality UX: smooth section navigation, polished motion, and friendly empty-state handling
- Responsive projects carousel: 1/2/3/4 cards per viewport with precise pixel-based sliding
- Mobile-first navigation: frosted-glass menu overlay with blur and gradient
- Dedicated Signup page: matching hero background, brand-forward layout, and toast feedback
- Accessible: keyboard-friendly controls, descriptive alt text, and reduced visual jitter

### Tech Stack
- React 19 + Vite 7
- Tailwind CSS 3
- Motion (for performant animations)
- React Router 6 (routes: `/` and `/signup`)
- React Toastify (form feedback)
- ESLint (modern React rules)

---

## Demo

- Home: sections for Header, About, Projects, Testimonials, Contact
- Signup: standalone route with consistent background and navbar

You can navigate between pages via the navbar. From the Signup page, navbar links route back to the Home page and smoothly scroll to the requested section.

---

## Features in Depth

### 1) Smooth, cross-route section navigation
- On the Home page, clicking a navbar link scrolls to its section with a custom eased animation.
- From other routes (e.g., `/signup`), links navigate to `/#SectionId`. On mount, Home detects the hash and performs a smooth scroll.

Key implementation:
- `Navbar` uses React Router’s `useNavigate` + `useLocation` and a custom `smoothScrollTo`
- `pages/Home.jsx` listens to `location.hash` and scrolls after layout

### 2) Projects carousel (responsive)
- 1 card (xs), 2 (sm), 3 (md), 4 (lg+) with `w-full sm:w-1/2 md:w-1/3 lg:w-1/4`
- Pixel-perfect sliding using measured child `offsetLeft` values
- Clamp navigation at bounds to avoid blank space

### 3) Motion-polished animations
- Subtle entrance transitions (`easeOut`, short duration, small offsets) for each section
- Viewport-based triggers with `once: true` to avoid repeated animations

### 4) Mobile menu with “frosted glass”
- Full-screen overlay: `bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-3xl`
- Body scroll locked while menu is open
- High-contrast text for readability

### 5) Signup page
- Dedicated route: `/signup`
- Full-screen hero background matching the home header
- Centered card with logo, form fields, and toast on submit

---

## Getting Started

Prerequisites:
- Node.js 18+ (recommend LTS)

Install and run:
```bash
npm install
npm run dev
```

Build and preview production:
```bash
npm run build
npm run preview
```

Lint:
```bash
npm run lint
```

---

## Project Structure
```text
real-estate-app/
  public/
    header_img.png
    favicon.svg
  src/
    assets/
      assets.js                 # All images and data (projects, testimonials)
    components/
      Navbar.jsx                # Desktop + mobile nav with frosted overlay
      Header.jsx                # Hero with CTA and Motion animations
      About.jsx                 # Brand story section
      Projects.jsx              # Responsive carousel with pixel-offset sliding
      Testimonials.jsx          # Testimonial grid with star ratings
      Contact.jsx               # Web3Forms integration + toast feedback
      Footer.jsx                # Evenly spaced grid; responsive newsletter input
      Signup.jsx                # Standalone signup page
    pages/
      Home.jsx                  # Home sections bundled for the `/` route
    App.jsx                     # Routes: `/` and `/signup`, shared Footer/Toasts
    main.jsx                    # App bootstrap + Router provider
    index.css                   # Tailwind + base styles
  tailwind.config.js            # Tailwind setup
  vite.config.js                # Vite config
  eslint.config.js              # Modern React ESLint config
  package.json
```

---

## Key Implementation Notes

### Animations
- Using `motion/react` (Motion) for consistent, performant animations.
- Entrance animations tuned for large screens: subtle offsets, short durations, `easeOut` easing, and `viewport` thresholds.

### Smooth Scroll
- Custom eased `requestAnimationFrame` scroller in `Navbar.jsx` to ensure smooth behavior across browsers.
- Hash-based navigation from `/signup` back to `/` then smooth scroll to target.

### Responsiveness
- Tailwind breakpoints drive layout changes (columns, font sizes, spacing).
- Projects carousel adapts items per row at `sm`, `md`, and `lg`.

### Accessibility
- Keyboard-focusable controls, visual focus styles, descriptive `alt` text.
- Body scroll is locked when the mobile menu is open to prevent background scroll.

---

## Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

---

## Deployment
- Works out-of-the-box on Vercel/Netlify. Build command: `npm run build`; output: `dist/`.

---

## Credits
- UI and branding: Dwellify (project owner)
- Icons/images: bundled under `src/assets` and `public/`


