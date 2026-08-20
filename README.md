# Imperial College London (ICL) — Website

A React.js university website built for a Web Technology Lab assignment.

## Concepts Demonstrated

- **React Components** — `Navbar`, `Footer`, `Card`, `StatCard`, `DropdownMenu`
- **Props** — the same `Card` and `StatCard` components are reused across
  pages with different data passed in as props
- **JSX** — used throughout every component and page
- **useState** — dropdown open/close state, mobile menu toggle, and the
  controlled contact form
- **Event Handling** — `onClick` (buttons, dropdowns, mobile menu),
  `onChange` (form inputs), `onSubmit` (contact form with
  `event.preventDefault()`)
- **React Router** — `BrowserRouter`, `Routes`, `Route`, `Link`/`NavLink`
  power navigation across 12 routes without full page reloads
- **Basic responsive CSS** — a mobile-friendly navbar, responsive grids for
  cards/stats, and a breakpoint-based layout in `src/index.css`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   ├── StatCard.jsx
│   └── DropdownMenu.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx           (history, quick facts, and departments)
│   ├── Vision.jsx
│   ├── Leadership.jsx
│   ├── Undergraduate.jsx
│   ├── Postgraduate.jsx    (postgraduate programs + PhD program)
│   ├── Eligibility.jsx     (eligibility criteria + important dates)
│   ├── Application.jsx
│   ├── Research.jsx        (research areas + publications)
│   ├── CampusLife.jsx
│   ├── Placements.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Navigation

```
Home | About Us ▼ | Academics ▼ | Admissions ▼ | Research | Campus Life | Placements | Contact Us

About Us    → Vision & Mission, Leadership
Academics   → Undergraduate, Postgraduate & PhD
Admissions  → Eligibility & Dates, Application Process
```

Three dropdown menus (About Us, Academics, Admissions) are enough to show
the pattern clearly without a menu for every single section — Research,
Campus Life, Placements, and Contact Us are single pages linked directly.

## Running the Project

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Notes

- All content (student counts, faculty names, publications, dates, etc.)
  is realistic mock data created for this assignment — ICL is a fictional
  institution.
- No backend, database, or authentication is used. The contact form and
  "Apply Now" button only demonstrate frontend event handling.
- Color theme is minimalist black and white, with a single muted, natural
  stone/tan accent color used sparingly for buttons and highlights.
- **This is a fictional/independent student project.** It uses the name
  "Imperial College London" as mock branding for a lab assignment; it is
  not affiliated with, endorsed by, or representative of the real
  institution. All history, statistics, staff names, and figures are
  invented placeholder content.
