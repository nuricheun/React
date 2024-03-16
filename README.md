# Getting Started with Create React App

### `yarn create react-app basic`

# Important tools

- BABEL
  - JavaScript Transcompiler
  - Convert ECMAScript 2015+ -> old version
- Webpack
  - Bundle the code, JavaScript module bundler

# When yarn and creact-react-app has conflicts

- `yarn add -D eslint-config-react-app`
- create `.yarnrc.yml` file (included in this project)
- `yarn cache clean`
- `yarn install`
- `yarn start`

# useReducer

- useReducer Definition Guide
  create a folder name `reducer` under `src`
  create a reducer file (eg. `person-reducer.js`)
  create a reducer function (eg. `function personReducer(person, action)`)
- How to use useReducer
  `const [person, dispatch] = useReducer(personReducer, initialPerson)`
  `dispatch({type: "updated", prev, current})`

# immer

- `yarn add immer use-immer`
