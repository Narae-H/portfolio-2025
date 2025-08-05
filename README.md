# Project Overview

This project is a personal portfolio site built with `Next.js (React.js Framework) and TypeScript`, designed to showcase development skills and projects.
It uses static export to enable deployment via GitHub Pages and emphasises clean, maintainable code structure and modern frontend best practices.

The main goal is to create a responsive, performant portfolio with well-organised code and automated deployment workflow.

<br/>

# What Works (Implemented)

<br/>

# Tech Stack

| **Category**           | **Stack / Tools**                                                                 | **Notes / Details**                                                                    |
| ---------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Frontend**           | Next.js 15, React 19, TypeScript                                                  | Latest Next.js and React versions with TypeScript for a robust development environment |
| **Styling**            | Tailwind CSS, normalize.css                                                       | Planning to use Tailwind CSS; normalize.css for CSS reset and base styling             |
| **State Management**   | React Hooks (`useState`, `useEffect`), React-Redux (`useSelector`, `useDispatch`) | For global and component state management                                              |
| **Routing**            | React Router DOM                                                                  | Client-side routing for SPA                                                            |
| **Icons**              | React Icons                                                                       | Flexible and lightweight icon components                                               |
| **Deployment**         | GitHub Pages via `gh-pages`                                                       | Static HTML export and deployment to GitHub Pages                                      |
| **Linting/Formatting** | ESLint, Prettier                                                                  | Code quality and formatting tools                                                      |

<br/>

# Project Structure (Modify needed)

```bash
portfolio-2025
├── 📁 .github                         # GitHub configuration and templates for collaboration
│   ├── 📁 ISSUE_TEMPLATE              
│   │   ├── 📄 bug_report.md
│   │   ├── 📄 feature_request.md
│   │   └── 📄 task.md
│   ├── 📄 COMMIT_CONVENTION.md        
│   └── 📄 PULL_REQUEST_TEMPLATE.md   
│
├── 📁 app                             # Next.js App Router application structure
│   ├── 📁 components                  # Reusable React components
│   ├── 📁 styles                      # CSS Modules for component-level styling
│   ├── 📄 layout.tsx                  
│   ├── 📄 loading.tsx                  
│   ├── 📄 page.tsx                  
│   └── 📄 StoreProvider.tsx           # Redux provider component         
│
├── 📁 data                            # Static data used in components
│   └── 📄 sortAndFilters.ts           # Sidebar menu data (e.g., meal categories)
│
├── 📁 lib                             # Pure logic helpers (e.g., parsing, formatting, tree builders)
│   ├── 📁 graphql                     # GraphQL query definitions for Shopify
│   ├── 📁 hooks                       # Custom hooks
│   ├── 📁 parsers                     # Data transformers for API responses
│   └── 📁 utils                       # General utility functions
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          # Static assets
│
├── 📁 redux                           # State management
│
└── 📄 .env.local                      # Environment variables for local development
```

<br/>

# Known Issues & Solutions
## Dark Mode
https://tailwindcss.com/docs/dark-mode
https://tailwindcss.com/docs/background-color
