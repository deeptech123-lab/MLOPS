# Sample Frontend Web App

A tiny, dependency-free frontend sample that showcases a responsive layout, theme toggle, and a few interactive UI widgets.

## Getting started

Open `index.html` directly in a browser, or run a quick local server:

```bash
python -m http.server 8080 --bind 0.0.0.0
```

Then visit <http://localhost:8080>. If you prefer, you can use the helper script:

```bash
./scripts/serve.sh
```

## Features

- Responsive hero + feature cards layout
- Light/dark theme toggle (stored in `localStorage`)
- Fake stats that animate on load
- Newsletter form with basic validation

## Project structure

```
.
├── index.html
├── styles.css
└── app.js
```
