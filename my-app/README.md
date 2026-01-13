This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## NextJs

- For Building Web application
- Ful-stack framework
- Opinionated Framework means it has its own way of doing things
  - eg: File based routing, API routes, etc.
- Built on top of ReactJs
- Developed by Vercel
- Hybrid framework
- Used to build web applications
- React based framework
- Used for server side rendering and static site generation

## Optional Chaining

- Optional chaining is a feature in JavaScript that allows you to safely access nested object properties without having to check if each property in the chain exists.
- It is denoted by the `?.` operator.
- If any property in the chain is `null` or `undefined`, the expression short-circuits and returns `undefined` instead of throwing an error.
- data?.property?.subProperty means if data exists then return property else return undefined or null
- Example:

```javascript
const user = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};
const city = user?.address?.city; // "New York"
const country = user?.address?.country; // undefined (no error thrown)
const name = user?.name; // means if name exists then return name else return undefined or null
```

## Features

- UI Building
- Components
- Rendering
  - Server side rendering (SSR)
  - Client side rendering (CSR)
  - Static site generation (SSG)
- Optimization
- Routing - File based routing
- API routes
- Data fetching
- Styling

## Component types

- Server component (By default)
- Client component

1. Server component: Server side tasks like data fetching, file read, database data fetching, async tasks

2. Client component: Exactly react component, hooks, events, user interaction

## Server component

- By default, all components in Next.js are server components
- Cannot use react hooks, events, user interaction in server components
- Used for server side tasks like data fetching, file read, database data fetching, async tasks
- Can import client components inside server components
- example:

```javascript
// server component
import ClientComponent from "./ClientComponent";
export default function ServerComponent() {
  // server side logic here
  return (
    <div>
      <h1>This is a server component</h1>
      <ClientComponent /> {/* Importing client component */}
    </div>
  );
}
```

## Client component

- To create a client component, add the directive "use client" at the top of the file
- Can use react hooks, events, user interaction in client components
- Cannot use server side tasks like data fetching, file read, database data fetching, async tasks
- Can import server components inside client components
- example:

`````javascript
// client component
"use client"; // directive to make it a client component
import { useState } from "react";
export default function ClientComponent() {
  const [count, setCount] = useState(0); // using react hook
  return (
    <div>
      <h1>This is a client component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}````



## Folder Structure

- app: Main application folder
- public: Static assets
- styles: CSS files
- node_modules: Dependencies
- .next: Build output
- package.json: Project metadata and dependencies
- next.config.js: Next.js configuration
- README.md: Project documentation
- .gitignore: Git ignore file
- package-lock.json/yarn.lock: Dependency lock file
- .env.local: Environment variables
- .eslintrc.json: ESLint configuration
- .prettierrc: Prettier configuration
- tsconfig.json: TypeScript configuration (if using TypeScript)
- next-env.d.ts: Next.js TypeScript definitions (if using TypeScript)
- babel.config.js: Babel configuration (if using custom Babel setup)
- jest.config.js: Jest configuration (if using Jest for testing)
- cypress/: Cypress end-to-end tests (if using Cypress)
- tests/: Unit and integration tests (if using a testing framework)
- scripts/: Custom scripts for build, deployment, etc.
- components/: Reusable React components
- lib/: Library code and utilities
- hooks/: Custom React hooks
- context/: React context providers
- middleware/: Custom middleware for API routes
- types/: TypeScript type definitions (if using TypeScript)
- assets/: Images, fonts, and other static assets
- config/: Configuration files and settings
- locales/: Localization and internationalization files

## Import alias

- Import alias is a way to create shortcuts for importing modules in your project. Instead of using long relative paths, you can define aliases that map to specific directories or files. This makes your imports cleaner and easier to manage.
- To configure import aliases in Next.js, you can use the `jsconfig.json` or `tsconfig.json` file (for TypeScript projects). Here’s how to set it up:

1. Create a `jsconfig.json` file in the root of your project (if you don’t have one already).
2. Add the following configuration to define your aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@lib/*": ["lib/*"],
      "@styles/*": ["styles/*"]
    }
  }
}
`````

3. Now, you can use the aliases in your imports. For example:

```javascript
import Button from "@components/Button";
import fetchData from "@lib/api";
import "@styles/global.css";
```

- This setup allows you to easily manage and organize your imports, making your codebase cleaner and more maintainable.

## .next Folder

- The `.next` folder is automatically generated by Next.js when you build or run your application. It contains the compiled output of your project, including server-side rendered pages, static assets, and other build artifacts.
- You typically do not need to interact with the `.next` folder directly, as it is managed by Next.js. However, it is important to note that this folder should not be committed to version control (e.g., Git) since it can be regenerated at any time by running the build or development commands.
- To ignore the `.next` folder in Git, make sure it is included in your `.gitignore` file:

```
.next/
```

## App Router in nextJs

- App Router is a new routing system introduced in Next.js 13 as part of the App Directory feature.
- It provides a more flexible and powerful way to define routes and manage layouts in your Next.js applications compared to the traditional Pages Router.
-

- Key features of the App Router include:

1. File-based routing: Similar to the Pages Router, the App Router uses a file-based routing system where the file structure in the `app` directory defines the routes of your application.
2. Nested layouts: The App Router allows you to create nested layouts by defining `layout.js` files in different directories. This enables you to share common UI components and styles across multiple pages.
3. Server and Client Components: The App Router supports both server and client components, allowing you to optimize performance and user experience by choosing where components are rendered.
4. Enhanced data fetching: The App Router introduces new data fetching methods that are more integrated with the component model, making it easier to fetch data at different levels of your application.
5. Improved loading and error handling: The App Router provides built-in support for loading states and error handling through special files like `loading.js` and `error.js`.
6. Colocation of code: With the App Router, you can colocate your components, styles, and data fetching logic within the same directory structure, leading to better organization and maintainability of your codebase.

- To get started with the App Router, make sure you are using Next.js 13 or later and create an `app` directory in the root of your project. From there, you can start building your pages and layouts using the new routing system.

** Notes: **

// make is short notes

- src/app
- In app folder, you cannot reaname page.js and layout.js to other names. They are reserved names and you can change the coder inside them but not the file names.
- layout.js is used for common layout for all the pages inside that folder
- page.js is used for specific page content
- You can have multiple layouts in different folders for different sections of your app
- You can have nested layouts by creating layout.js files in subfolders
- You can have global layout in app/layout.js which will be common for all pages
- You can create loading.js file for loading state
- You can create error.js file for error handling
- You can create not-found.js file for 404 handling
- You can use 'use client' directive at the top of the file to make it a client component
- You can use server components by default without any directive
- You can use CSS modules, global CSS, and other styling methods in the app router

## Pages Router in NextJs

- Pages Router is the traditional routing system in Next.js
- It uses the `pages` directory to define routes
- Each file in the `pages` directory corresponds to a route based on its file name and location
- You can create dynamic routes using square brackets in file names
- You can use `getServerSideProps`, `getStaticProps`, and `getStaticPaths` for data fetching
- You can create API routes in the `pages/api` directory
- It is recommended to use either App Router or Pages Router in a single project, not both
