# Sumanta — Data Analyst Portfolio

A React + Tailwind CSS portfolio site. Pure frontend, no backend.

## Run it locally (VS Code)

1. Open this folder in VS Code.
2. In the terminal:
   ```
   npm install
   npm run dev
   ```
3. Open the local URL it prints (usually http://localhost:5173).

## Edit your content

Everything text-based — bio, skills, project details, contact links — lives in
one file: `src/data/portfolioData.js`. Change values there and every
component updates automatically.

## Project structure

```
src/
  components/
    Navbar.jsx      – top nav bar
    Hero.jsx         – name, role, intro, CTA buttons
    RetentionChart.jsx – the small animated chart in the hero
    About.jsx        – about paragraphs
    Skills.jsx        – skill categories as pill badges
    Project.jsx       – the case-study card
    Contact.jsx       – contact links + footer
  data/
    portfolioData.js  – all editable content
  App.jsx             – assembles the sections
  main.jsx            – React entry point
  index.css           – Tailwind directives + small global rules
```

## Deploy to Vercel

Push this folder to a GitHub repo, then import it in Vercel — it will
auto-detect the Vite framework and deploy with zero configuration.
