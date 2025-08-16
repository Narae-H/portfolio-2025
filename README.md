# My Portfolio
<img width="1920" height="911" alt="Image" src="https://github.com/user-attachments/assets/0943f69b-0be6-4267-ad79-204e16feec94" />

🔗Link: [portfolio-2025-liart-nu.vercel.app](https://portfolio-2025-liart-nu.vercel.app/)   

<br/>

# Introduction

This project is a personal portfolio site built with `Next.js (React.js Framework) and TypeScript`, designed to showcase development skills and projects.
It uses static export to enable deployment via GitHub Pages and emphasises clean, maintainable code structure and modern frontend best practices.

The main goal is to create a responsive, performant portfolio with well-organised code and automated deployment workflow.

<br/>

# What Works (Implemented)
- Responsive layout for desktop, tablet, and mobile
- Dark/Light theme toggle with Tailwind CSS
- Dynamic sidebar and tab navigation
- Global state management with Redux Toolkit + Redux-persist
- LocalStorage-based tab state persistence 
- Reusable component library (Badge, Icon, List, etc.)
- Deployment via Vercel

<br/>

# Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-000000?logo=nextdotjs&logoColor=white) 
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06B6D4?logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)
![React-Redux](https://img.shields.io/badge/React-Redux-764ABC?logo=redux&logoColor=white)
![Redux-Persist](https://img.shields.io/badge/Persist-6.0-764ABC?logo=redux&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Production-000000?logo=vercel&logoColor=white)

<br/>

# Project Structure

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
│   ├── 📁 [cagetory]
│   │    └── 📁 [subCategory]
│   │         └── 📁 [tabId]
│   ├── 📁 components                  # Reusable React components
│   ├── 📄 global.css                  
│   ├── 📄 layout.tsx                  
│   ├── 📄 loading.tsx                  
│   ├── 📄 not-found.tsx                  
│   ├── 📄 page.tsx                  
│   └── 📄 StoreProvider.tsx           # Redux provider component         
│
├── 📁 constants                       # Constant data
│   └── 📄 constants.ts                
│
├── 📁 data                            # Static data
│
├── 📁 lib                             # Pure logic helpers (e.g., parsing, formatting, tree builders)
│   ├── 📁 hooks                       # Custom hooks
│   └── 📁 utils                       # General utility functions
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          # Static assets
│   ├── 📁 fonts                       
│   └── 📁 images                      
│
├── 📁 redux                           # State management
│
└── 📄 .env.local                      # Environment variables for local development
```

<br/>

# Known Issues & Solutions

## LocalStorage-based tab state is not shared across components ([Realated PR](https://github.com/Narae-H/portfolio-2025/pull/15/commits/5ba624134a7ae50b597332c9ce5301b797f8180b))

Initially, the tab state was stored in `localStorage` for persistence.  
However, because React components read from `localStorage` independently, state updates weren't reflected across components, causing inconsistencies.

### Solution: Use Redux Toolkit with redux-persist for global state management

- Manage tab states globally via `Redux Toolkit slice` keyed by storage keys.
- Persist Redux state to localStorage using `redux-persist`.
- This ensures all components share and react to the latest tab state instantly.
