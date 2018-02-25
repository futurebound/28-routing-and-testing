# Lab 28 ~ Routing and Testing

**Author**: Mitchell

**Version**: 1.0.0

## Overview
The focus on this lab is on exploring modularization of React components, instead of working with one giant `main.js` file for the entirety of the application. As applications scale in size, one size does not fit all effectively. This requires an undertanding of how to properly pass `props` from parent to child components, and how to modify state of parents through their children in response to various events.

This is a simple notes app, where users can create notes through interacting with a form. Their notes will be rendered upon submission to the page, below the form.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions.

# Description
## Components
```
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      NoteItem
```
### Landing

### Dashboard

### NoteCreateForm

### NoteList

### NoteItem

**<details>**
  <summary>Details</summary>
  
  * **`updateState()`** Expects a single `state` argument, calls the `searchApi` method with the passed state argument, and returns the `this.setState` method with the data returned from the API call.
  * **`searchApi()`** Expects a single `state` argument, and executes a `superagent.get()` request to the `API_URL`, with a specific topic and search results limit passed by the `SearchForm` components' state.
</details>

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [Babel Core](https://www.npmjs.com/package/babel-core) ~ npmjs.com/package/babel-core
  * [Babel Loader](https://www.npmjs.com/package/babel-loader) ~ npmjs.com/package/babel-loader 
  * [Babel Preset Env](https://www.npmjs.com/package/babel-preset-env) ~ npmjs.com/package/babel-preset-env
  * [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) ~ npmjs.com/package/babel-preset-react
  * [CSS Loader](https://www.npmjs.com/package/css-loader) ~ npmjs.com/package/css-loader 
  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Extract Text Webpack Plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ~ npmjs.com/package/extract-text-webpack-plugin
  * [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) ~ npmjs.com/package/html-webpack-plugin
  * [Node SASS](https://www.npmjs.com/package/node-sass) ~ npmjs.com/package/node-sass
  * [React](https://www.npmjs.com/package/react) ~ npmjs.com/package/react
  * [React DOM](https://www.npmjs.com/package/react-dom) ~ npmjs.com/package/react-dom
  * [SASS Loader](https://www.npmjs.com/package/sass-loader) ~ npmjs.com/package/sass-loader
  * [Superagent](https://www.npmjs.com/package/superagent) ~ npmjs.com/package/superagent
  * [Webpack](https://www.npmjs.com/package/webpack) ~ npmjs.com/package/webpack
  * [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) ~ npmjs.com/package/webpack-dev-server
</details>