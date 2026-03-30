# Git Flow Lab

A small static frontend project used to practice a basic Git Flow workflow (feature → develop → release → main).

## Description

This project demonstrates a simple UI with a theme switcher while serving as a sandbox for learning branching strategies, releases, and version tagging.

## Running locally

The project can be run without any build tools:

- Open index.html with Live Server in VS Code.
- Drag and drop the file into the browser.

## Features

### Dark / Light theme toggle

A toggle button in the top-right of the navigation bar switches between dark and light themes.

- Default theme is dark.
- Clicking the button updates the data-theme attribute on the <body> element:
  "dark" → default
  "light" → light mode.
- Styling is controlled via CSS variables:
  Defined in :root (default theme)
  Overridden in [data-theme="light"].
- The button icon updates dynamically:
  🌙 for dark mode
  ☀️ for light mode.

## Tech Stack

HTML5
CSS3 (with custom properties / variables)
Vanilla JavaScript.
