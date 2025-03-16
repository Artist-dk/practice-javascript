# JavaScript Practice Repository

This repo contains JavaScript exercises covering basics, DSA, Node.js, Cypress, and Playwright.


# 🔧 1. Install All Dependencies
From the root folder:
```
npm init -y
```
### Core stack
```
npm install express node react react-dom typescript 
```
### Testing frameworks
```
npm install cypress mocha chai jest ts-jest @playwright/test
```
### Dev dependencies
```
npm install @types/node @types/express @types/react @types/react-dom @types/mocha @types/chai @types/jest scss
```


# Folder Structure

```
/FullStackUltimateRepo
│
├── package.json              # Unified dependencies
├── package-lock.json         
├── node_modules/             # Single shared node_modules
│
├── frontend/                 # React + TypeScript app
│   ├── src/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   └── tsconfig.json
│
├── backend/                  # Node + Express backend API
│   ├── src/
│   │   └── server.ts
│   └── tsconfig.json
│
├── scripts/                  # JSON scripting, AJAX, Vanilla JS demos
│   ├── vanilla-js/
│   │   └── fetchData.js
│   └── json-scripting/
│       └── data.json
│
├── tests/                    # Testing setup for all frameworks
│   ├── cypress/
│   │   └── integration/
│   │       └── frontend_test.cy.js
│   │
│   ├── mocha-chai/
│   │   └── backend_api.test.ts
│   │
│   ├── jest/
│   │   └── frontend_unit.test.ts
│   │
│   └── playwright/
│       └── end_to_end.spec.ts
│
└── styles/                   # Frontend styling
    ├── main.css
    ├── main.scss
    └── components.scss

```

# 🚀 7. Run Everything!
1️⃣ Start Frontend:
```
npm run start:frontend
```

2️⃣ Start Backend:
```

npm run start:backend
```
3️⃣ Run Mocha/Chai tests:

```
npm run test
```
4️⃣ Open Cypress:

```
npm run cypress:open
```
5️⃣ Run Jest tests:

```
npm run test:jest
```
6️⃣ Run Playwright tests:

```
npm run test:playwright
```
7️⃣ Run both backend & frontend together:

```
npm run dev
```
