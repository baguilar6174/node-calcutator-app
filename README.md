# Node Multiplication Console App

This repository contains a basic application that is executed by console, its objective is to create a multiplication table with arguments sent by command console. This repository uses clean architecture principles and unit tests.

## Project creation

1. Init your Node project

```bash
yarn init
```

Complete all questions about your project

2. Add typescripts dependencies

```bash
yarn add -D typescript ts-node-dev @types/node
```

3. Create your `tsconfig.json`

```bash
yarn tsc -init
```

Update your `tsconfig.json` file

```json
{
  "exclude": ["node_modules", "dist", "src/**/*.test.ts"],
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "sourceMap": true,
    "outDir": "dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
  }
}
```

4. Create `src/` folder

```bash
mkdir src
```

5. Create main file

```bash
touch src/app.ts
```

6. In your `package.json` file, write scripts to run the project

```json
{
  ...
  "scripts": {
    "dev": "ts-node-dev ./src/app.ts",
    "dev:watch": "ts-node-dev --respawn --transpile-only ./src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "yarn build && node dist/app.js"
  },
  ...
}
```

You can test your `app.ts` file here!

7. Add Jest dependency

```bash
yarn add -D jest
```

8. Create Jest config file `jest.config.ts`

```bash
yarn jest --init
```

Answer some questions, after that your `jest.config.ts` file will be created.

9. Configure Typescript support for Jest

```bash
yarn add -D ts-jest @types/jest
```

10. Update your `jest.config.ts` file

```typescript
import type {Config} from 'jest';

const config: Config = {
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "jest-environment-node",
};

export default config;
```

11. Add tests scripts in your `package.json` file

```json
{
  ...
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --coverage",
    "dev": "ts-node-dev ./src/app.ts -b 10 -l 15",
    "dev:watch": "ts-node-dev --respawn --transpile-only ./src/app.ts -b 10 -l 15",
    "build": "rimraf ./dist && tsc",
    "start": "yarn build && node dist/app.js -b 10 -l 15"
  },
  ...
}
```

12. Finally you can run tests commands

```bash
yarn test
```

## Installation

Clone this repository

```bash
git clone https://github.com/baguilar6174/node-calcutator-app.git
```

Install dependencies

```bash
yarn
```

## Running the app

1. Run `yarn dev` with this command you send:

```bash
npx ts-node ./src/app.ts -b 10 -l 15
```

* You can update params command in `package.json` file or execute command with custom params

```bash
npx ts-node ./src/app.ts -b 10 -l 15 -s -n filename -d destination
```

## My process

### Built with

- Node
- Typescript
- Nodemon
- Yargs
- Jest
- Supertest

### What I learned

- Create console apps
- Console arguments
- Flags and options
- Yargs configuration
- Use Cases & Use Case Testing
- Testing on console commands
- Dynamically change console arguments
- Mocks & Spies
- Testing when errors are expected
- Integration testing
- Testing with self-invoked anonymous asynchronous functions
- Testing with yargs
- Testing with file and directory creation

## Development Features

- Clean Architecture
- Good folder structure
- SOLID

## Improves

- 


## TODO:

- 

## Stay in touch

- Website - [www.bryan-aguilar.com](https://www.bryan-aguilar.com/)
- Medium - [baguilar6174](https://baguilar6174.medium.com/)
- LinkeIn - [baguilar6174](https://www.linkedin.com/in/baguilar6174)


