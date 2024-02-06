# 🚀 **HassinQ: Quiz Hassin co**

## Table of Contents

- [Dependencies](#dependencies)
- [Tasks](#tasks)
  - [Three Routes](#three-routes)
  - [Notes](#notes)
- [Run Project](#run-project)
- [Run Server](#run-server)
- [Run Tests](#run-tests)
- [Build and Preview](#build-and-preview)

## Dependencies

Ensure you have the following dependencies installed:

- **react-redux** (`^9.1.0`): Manage states globally.
- **react-router-dom** (`^6.22.0`): Handle routes.
- **@emotion/css** (`^11.11.2`): Add styles.
- **@reduxjs/toolkit** (`^2.1.0`): Use simple Redux.
- **antd** (`^5.14.0`): Use ready-to-use components.

### Dev Dependencies

- **cypress** (`^13.6.4`): End-to-end testing.
- **json-server** (`^1.0.0-alpha.23`): Use mock server.
- **vite-plugin-pwa** (`^0.17.5`): Use PWA features.

## Tasks

### Three Routes

1. **Home**: List of cards with images and titles. Located at `pages/home`.
2. **SinglePage**: Detail of a card. Located at `pages/single-card`.
3. **About Us**: About us page with custom text. Located at `pages/about`.

### Notes

- **Add Navbar**: Add a navigation bar on top of all pages with links to Home and About. Located at `components/layouts`.
- **Handle Click on Card Link**: Handle click on card links to show information. Located at `components/card`.
- **Handle Remove Card Button**: Handle the removal of a card without rerendering all pages. Located at `components/actions`.
- **Use Store for Global States**: Use Redux store to handle global states. Located at `redux/store`.
- **Use Mock Service API**: Use a mock service API with JSON server. Located at `data-services/db.json`.
- **Add Some Style**: Add styles with Emotion CSS and Ant Design. Located at `./styles`.
- **Use Cypress for Testing**: Use Cypress to test various scenarios. Located at `cypress/e2e`. (It's your first time using this library, hope it's satisfying!)
- **Use Vite PWA**: Use Vite PWA to turn the app into a PWA. Include a simple demo code to register service worker and cache some static assets. Located at `sw.js`.

## Run Project, Server, Tests, Build, and Preview

```bash
# Run Project Locally
npm run dev

# Run JSON Server
npx json-server --watch src/data-services/db.json --port 3031

# Run Tests with Cypress
npm run cypress

# Build and Preview
npm run build
npm run preview
```
