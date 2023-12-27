# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

`npm create vite@latest` => to create a react app using vite

# Use tailwind in project
```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

### Changes in tailwind.config.md
```
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", //add these two to it
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

```
### Add to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# run the development server
```
    npm install
    npm run dev
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
