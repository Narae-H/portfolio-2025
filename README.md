# My Portfolio
<img width="1920" height="auto" alt="Image" src="https://github.com/user-attachments/assets/0943f69b-0be6-4267-ad79-204e16feec94" />

🔗Link: [portfolio-2025-liart-nu.vercel.app](https://portfolio-2025-liart-nu.vercel.app/)   

<br/>

# Introduction

This project is a personal portfolio site built with `Next.js (App Router) and TypeScript`, designed to showcase development skills and projects.
It is styled as a VS Code workspace and deployed on Vercel, emphasising clean, maintainable code structure and modern frontend best practices.

The main goal is to create a responsive, performant portfolio with well-organised code and an automated deployment workflow.

<br/>

# What Works (Implemented)
- Responsive layout for desktop, tablet, and mobile
- Dark/Light theme toggle with Tailwind CSS, with a pre-hydration script to prevent theme flash
- Dynamic sidebar and tab navigation
- Collapsible VS Code-style Explorer sidebar, with its open/closed state persisted across sessions
- Global state management with Redux Toolkit + Redux-persist
- LocalStorage-based tab state persistence 
- First-visit onboarding tour (driver.js) with a footer replay entry point and a reduced mobile flow
- SEO: generated `sitemap.xml` and `robots.txt`, plus per-page metadata
- Accessibility: keyboard-navigable tabs and sidebar, focus-visible rings
- Reusable component library (Badge, Icon, List, etc.)
- Deployment via Vercel

<br/>

# Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-15.4.10-000000?logo=nextdotjs&logoColor=white) 
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06B6D4?logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)
![React-Redux](https://img.shields.io/badge/React-Redux-764ABC?logo=redux&logoColor=white)
![Redux-Persist](https://img.shields.io/badge/Persist-6.0-764ABC?logo=redux&logoColor=white)
![driver.js](https://img.shields.io/badge/driver.js-1.7.0-2EAD33)
![React Icons](https://img.shields.io/badge/React_Icons-5.5-E91E63?logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Production-000000?logo=vercel&logoColor=white)

<br/>

# Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint via `next lint` |

### Environment variables

Optional for local development. To override the base URL used by `sitemap.xml`, `robots.txt`, and page metadata, create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

If it isn't set, the site falls back to `VERCEL_URL` when deployed on Vercel, and to `http://localhost:3000` otherwise.

<br/>

# Project Structure

```bash
portfolio-2025
├── 📁 .github                         # GitHub configuration and templates for collaboration
│   ├── 📁 ISSUE_TEMPLATE              
│   │   ├── 📄 bug_report.md
│   │   ├── 📄 feature_request.md
│   │   └── 📄 task.md
│   ├── 📁 workflows                   
│   │   └── 📄 label-sync.yml          # Syncs repository labels from labels.yml
│   ├── 📄 COMMIT_CONVENTION.md        
│   ├── 📄 labels.yml                  
│   └── 📄 PULL_REQUEST_TEMPLATE.md   
│
├── 📁 app                             # Next.js App Router application structure
│   ├── 📁 [category]                  # e.g. /experiences, /skills
│   │    └── 📁 [subCategory]          # e.g. /experiences/hhlawyers
│   │         └── 📁 [tabId]           # e.g. /experiences/hhlawyers/platformrebuild
│   ├── 📁 components                  # Reusable React components
│   ├── 📄 globals.css                  
│   ├── 📄 layout.tsx                  
│   ├── 📄 loading.tsx                  
│   ├── 📄 not-found.tsx                  
│   ├── 📄 page.tsx                  
│   ├── 📄 robots.ts                   # Generates robots.txt
│   ├── 📄 sitemap.ts                  # Generates sitemap.xml from the menu tree
│   └── 📄 StoreProvider.tsx           # Redux provider component         
│
├── 📁 constants                       # Constant data
│   └── 📄 constants.ts                
│
├── 📁 data                            # Static content, structured for a future DB migration
│   ├── 📁 experiences                 # One JSON per project, grouped by employer
│   ├── 📁 menu                        # Navigation tree driving the sidebar, tabs, and sitemap
│   ├── 📁 skills                      # One JSON per skill, cross-linked to related projects
│   └── 📄 skillBadges.ts              # shields.io badge definitions for tech stacks
│
├── 📁 lib                             # Pure logic helpers (e.g., parsing, formatting, tree builders)
│   ├── 📁 hooks                       # Custom hooks
│   └── 📁 utils                       # General utility functions
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          # Static assets
│   └── 📁 fonts                       # Monaspace Neon (self-hosted)
│
├── 📁 redux                           # State management
│
└── 📄 .env.local                      # Environment variables for local development (not committed)
```
