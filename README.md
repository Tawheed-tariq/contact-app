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

# Used Formik to create forms
```
npm i formik
```
## example
```
    import {Form, Formik, Field} from 'formik'
    <Formik>
        <Form>
            <label htmlFor="name">Name</label>
            <Field name='name' type="text" id="name" />
        </Form>
    </Formik>

```

# Used react-toastify to create add, delete, update toasts
```
    npm i react-toastify
```

# Used yup for schema validation
```
    npm i yup
```