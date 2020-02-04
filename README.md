<p align="center">
  <img width="800px" src="http://venskou.name/repo-covers/crwn-shop-react-cover.jpg">
</p>
<p align="center">
  :zap:&nbsp;<a href="http://crwn-shop-venskou.herokuapp.com/">Live&nbsp;demo</a>&nbsp;&nbsp;|&nbsp;&nbsp;⚒&nbsp;<a href="#-get-started">Get&nbsp;Started</a>
</p>

## 💭 Overview

This is a fully functional e-commerce web application including authentication and payment. The goal of this project is to learn and practice technologies in the React ecosystem.

## 🏗 Technology Stack

- [React](https://reactjs.org/) - a popular user interface JavaScript library.
- [Redux](https://redux.js.org/) - centralize and manage the state of JavaScript apps.
- [React-router](https://reacttraining.com/react-router/) - helps to navigate through React components.
- [Reselect](https://github.com/reduxjs/reselect#motivation-for-memoized-selectors) - a "selector" library for Redux, to avoid recalculations of states by using memoized selectors.
- [Redux-persist](https://github.com/rt2zz/redux-persist) - manage to persist Redux store in storage.
- [React-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout) - a React component which wraps Stripe checkout for a better React integration.
- [Redux-saga](https://redux-saga.js.org/) - a library that aims to make application side effects(i.e. asynchronous things like data fetching and impure things like accessing the browser cache).
- [React hooks](https://reactjs.org/docs/hooks-intro.html) - enable function component to use state and other React features.
- [React.lazy](https://reactjs.org/docs/code-splitting.html) - split React component into different chunks, then lazy load them.

### 💈 Third Party Services

- [Firebase](https://firebase.google.com/) - service provider for authentication and data storage.
- [Stripe](https://stripe.com/) - online payment service platform.

## ⚒ Get Started

### Install dependencies

Run `yarn install` to install the dependencies of all packages.

### Start

Run `yarn start` to start everything needed to run project locally.

### Other commands
- `yarn build` - builds our packages (only needed for deployment).
- `yarn prettier` - formats all js, jsx, scss files in `src` folder.
- `yarn lint-staged` - start pre-commit operations.
- `yarn eject` - if you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
