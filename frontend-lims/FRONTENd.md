# Frontend Setup Guide

This guide walks you through setting up the frontend with Next.js, Tailwind CSS, and ShadCN UI.

## Steps

### 1. Create a Next.js Project

Run the command to create a new Next.js project:

```bash
npx create-next-app@latest
```

Follow the prompts and select:
- TypeScript: No
- ESLint: Yes
- Tailwind CSS: Yes
- Use `src/` directory: Yes
- App Router: Yes

### 2. Start the Development Server

After setup, start the dev server:

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

### 3. Install ShadCN UI

Run the following to initialize ShadCN UI:

```bash
npx shadcn@latest init
```

When prompted, choose:
- Style: Default
- Base Color: Zinc
- Use CSS Variables: No

If you encounter dependency issues, use `--legacy-peer-deps`:

```bash
npx shadcn@latest init --legacy-peer-deps
```

### 4. Customize Components

You can now add and customize ShadCN UI components as needed.

---

**Summary**: This setup configures a Next.js frontend with Tailwind CSS and ShadCN UI. Start by creating the project, run the server, and initialize ShadCN UI for easy component usage.
