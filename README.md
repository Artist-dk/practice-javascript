# JavaScript Practice Repository

This repo contains JavaScript exercises covering basics, DSA, Node.js, Cypress, and Playwright.


# 🔧 1. Install All Dependencies
From the root folder:
```
npm init -y
```

### Core stack
```
npm install express node typescript
```

### Testing frameworks
```
npm install cypress mocha chai jest ts-jest @playwright/test
```

### Dev dependencies
```
npm install @types/node @types/express @types/mocha @types/chai @types/jest scss dotenv mysql2 bcrypt nodemon
```


# Folder Structure

```
/FullStackUltimateRepo
│        
├── node_modules/             # Single shared node_modules
├── config/                   # Configuration files
├── cypress/                  # Cypress tests
├── database/                 # Database handling files
├── mocha/                    # Mocha tests
├── playwright/               # Playwright tests
├── playwright-report/        # Playwright test reports
├── scripts/                  # Utility scripts
├── server/                   # Backend server
├── test-results/             # Test output results
├── test-examples/            # Sample tests
├── typescript/               # TypeScript-specific code
├── vanilla-js/               # Vanilla JavaScript exercises
├── .gitignore                # Unified dependencies
├── cypress.config.js         # Cypress configuration
├── package-lock.json         # Lock file for dependencies
├── package.json              # Project metadata and scripts
├── playwright.config.ts      # Playwright configuration
└── README.md                 # This file
```

# 🚀 7. Run Everything!

1️⃣ Start Backend:
```
npm run server
```

2️⃣ Run Mocha/Chai tests:
```
npm run mocha
```

3️⃣ Open Cypress:
```
npm run cypress
```

4️⃣ Run Jest tests:
```
npm run test:jest
```

5️⃣ Run Playwright tests:
```
npm run test:playwright
```

6️⃣ Run both backend & frontend together:
```
npm run dev
```


# 📦 package.json

```json
{
  "name": "practice-javascript",
  "version": "1.0.0",
  "description": "This repo contains JavaScript exercises covering basics, DSA, Node.js, Cypress, and Playwright.",
  "main": "index.js",
  "scripts": {
    "server": "nodemon server/app.js",
    "mocha": "mocha mocha/",
    "cypress": "cypress open",
    "test:jest": "jest",
    "test:playwright": "npx playwright test",
    "dev": "concurrently \"npm run server\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@playwright/test": "^1.51.0",
    "@types/node": "^22.13.10",
    "@types/express": "^4.17.17",
    "@types/mocha": "^11.0.4",
    "@types/chai": "^5.2.0",
    "@types/jest": "^29.5.3",
    "bcrypt": "^5.1.1",
    "chai": "^5.2.0",
    "cypress": "^14.2.0",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jest": "^29.7.0",
    "mocha": "^11.1.0",
    "mysql2": "^3.13.0",
    "nodemon": "^3.1.9",
    "typescript": "^5.8.2",
    "concurrently": "^8.2.1"
  }
}
```

