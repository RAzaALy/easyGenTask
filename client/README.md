# Vite React Typescript

[LIVE DEMO](=https://thoughtful-dress-goat.cyclic.app/)

## Installation

## NPM Scripts

### Vite scripts

```bash
npm run start                 # start development server
npm run dev                   # start development server
npm run build                 # build production bundle to 'dist' directly
npm run preview               # start production server
```

### Lint scripts

```bash
npm run lint:scripts          # check scripts
npm run lint:scripts:fix      # fix scripts
npm run lint:styles           # check styles
npm run lint:styles:fix       # fix styles
npm run format                # check code formatting
npm run format:fix            # fix code formatting
npm run lint:ts               # check types
npm run lint                  # check scripts, check styles, check formats and check types
npm run lint:fix              # fix scripts, fix styles, fix formats and check types
npm run lint:staged           # does npm run lint only for staged files
```

### Test scripts

```bash
npm run test             # run test
npm run test:coverage    # run test with code coverage
npm run cy:open          # open cypress ui
npm run cy:run           # run cypress test in headless mode
npm run cy:run:e2e       # run cypress end 2 end test in headless mode
npm run cy:run:component # run cypress component test in headless mode
```

### Report scripts

```bash
npm run lint:scripts:report   # generate eslint reports in reports/eslint.html
npm run lint:report           # generate eslint reports
```

### Utility scripts

```bash
npm run validate              # check scripts, check styles, check formats, check types and builds the project
npm run validate:fix          # fix scripts, fix styles, fix formats, check types and builds the project
npm run validate:staged       # does npm run lint only for staged files and builds the project
npm run prepare               # create Husky hooks
npm run clean                 # removes node_modules package-lock.json .husky dist reports
npm run uninstall:husky       # uninstall husky and remove .husky folder
npm run uninstall:tailwindcss # uninstall tailwindcss and its related plugins
npm run uninstall:cypress     # uninstall cypress and its related plugins and test files
npm run commit                # cli prompt for conventional commit
```

# License

MIT
