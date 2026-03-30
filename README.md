# Git Flow Lab

A static frontend for practicing Git Flow.

## Running locally

Open `index.html` with Live Server in VS Code, or drag it into your browser.

## Features

### Dark / Light theme toggle

A button in the top-right of the navbar switches between dark and light themes.

- Default is dark.
- Clicking toggles a `data-theme` attribute on `<body>` between `"dark"` and `"light"`.
- All colors are driven by CSS variables in `:root`, overridden by the `[data-theme="light"]` selector.
- The button icon flips between 🌙 and ☀️ to reflect the current state.
