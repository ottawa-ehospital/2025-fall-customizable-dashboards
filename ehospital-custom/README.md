# eHospital React Application

A React application built with Vite, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000). The dev server supports hot module replacement (HMR), so changes will be reflected immediately.

### Build

Build for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
ehospital-custom/
├── src/
│   ├── screens/
│   │   └── DashboardEditing/
│   │       ├── DashboardEditing.tsx
│   │       └── index.ts
│   ├── index.tsx
│   ├── index.css
│   └── tailwind.css
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing (if needed)

## Notes

This project was converted from an Anima-generated project to a standalone React application. Some image URLs may still reference Anima CDN - these should be replaced with local assets or your own image hosting service.
