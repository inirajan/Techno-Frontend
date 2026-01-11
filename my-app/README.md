This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Next Js

-- A React framework for production

- For Building web applications and websites with React
- Features: Server-side rendering, static site generation, API routes, and more
- Official Website: [https://nextjs.org/](https://nextjs.org/)
- Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
- Full-stack framework enabling both frontend and backend development
- Supports TypeScript, CSS, and Sass out of the box
- Easy deployment with platforms like Vercel

## Features

- UI Building
- Rendreing:
  - Client-side rendering (CSR)
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Incremental static regeneration (ISR)
- API Routes for backend functionality
- Routing- File-based routing system
- Built-in CSS and Sass support
- Image optimization
- Internationalization (i18n) support
- Fast refresh for instant feedback during development
- TypeScript support
- Middleware for advanced routing and handling
- Analytics and performance monitoring
- Easy deployment with platforms like Vercel
- Extensive plugin ecosystem
- Strong community support and regular updates

## Installation

To create a new Next.js project, you can use the following command:

````bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```a

This will set up a new Next.js application in the `my-next-app` directory and start the development server.
You can then open your browser and navigate to `http://localhost:3000` to see your new Next.js application in action.

# Components types

- Server Components(By default )
- Client Components(using "use client" directive)

1. Server Components:

   - Rendered on the server
   - Can fetch data directly from the server
   - file Read, databasse data fetching, ayync tasks, etc.
   - Do not have access to browser-specific APIs (e.g., `window`, `document`)
   - Used for static content and data fetching

2. Client Components:

   - Exactly react components, hooks, events, user interactions, etc.
   - Rendered on the client (browser)
   - Can use browser-specific APIs
   - Suitable for interactive elements and dynamic content
   - Must be explicitly marked with the `"use client"` directive at the top of the file


````
