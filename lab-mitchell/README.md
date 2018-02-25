# Lab 28 ~ Routing and Testing

**Author**: Mitchell

**Version**: 1.0.0

## Overview
The focus on this lab is on exploring modularization of React components, instead of working with one giant `main.js` file for the entirety of the application. As applications scale in size, one size does not fit all effectively. This requires an undertanding of how to properly pass `props` from parent to child components, and how to modify state of parents through their children in response to various events.

This is a simple notes app, where users can create notes through interacting with a form. Their notes will be rendered upon submission to the page, below the form, and saved in the application's state. Each note will have its own delete button, and clicking that button will remove its contents from the application's state.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions.

# Description
This application is segmented by the various `React` components. The `App` component is the highest level, and has two direct child components - `Landing` and `Dashboard`. `Dashboard` contains the overall application state, here `notes`, where all notes are stored. Its direct child components are `NoteCreateForm` and `NoteList`. `NoteCreateForm` manages data entered by users in the form fields, and adds that data to the `Dashboard` `notes` state. `NoteList` takes stored `notes` and displays them to the user in a view below the `NoteCreateForm`. It has a single child component, `NoteItem`, which adds the `remove` functionality to each note.
## Components
```
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      NoteItem
```
### App
This component is the highest level component of the application, and utilizes `react-router-dom` to determine route endpoints for the application, and which component to render depending on the endpoints.

### Landing
This component simply renders a short text description of the application on the `/` endpoint.

### Dashboard
This component holds the highest level application state, `notes`. It utilizes the `uuid` module to create unique `id`s for each note, and contains two methods: `handleAddNote()` and `handleRemoveNote()`. It renders both the `NoteCreateForm` and `NoteList` components, and passes them necessary props.
**<details>**
  <summary>Details</summary>
  
  * **`handleAddNote()`** Expects a single `note` argument and assigns `createdOn`, `id`, `editing`, and `completed` properties to the new note. It then saves this note using the `setState()` method to the `notes` state.
  * **`handleRemoveNote()`** Expects a single `event` argument and creates a temporary `id` variable, assigned the value of the `id` of the target note on a click event, and calls the `setState()` method with a `notes` state with the target `id` filtered out.
</details>

### NoteCreateForm
This component has two state props, `title` and `content`. It uses created `handleSubmit()` and `handleChange()` methods to record information entered by the user into the form fields, and create a new note with that information. It renders a form with two inputs, one for the note `title` and the other for the note `content`, as well as a submit button.
**<details>**
  <summary>Details</summary>
  
  * **`handleSubmit()`** Expects a single `event` argument, triggered by a submit button click by a user. It prevents the default action of that event, and calls the `handleAddNote()` method passed as props by the `Dashboard` component. It then calls `setState()` to reset its state to nothing for the next submission.
  * **`handleChange()`** Expects a single `event` argument, and utilizes deconstruction with the `setState()` method to update whichever form field had information entered to it.
</details>

### NoteList
This component acts only to render a single `<ul>` and the `NoteItem` component, passing it the `handleRemoveNote()` method and `notes` state it received from the `Dashboard` component as props.

### NoteItem
This component defines a single method `handleOnClick()`, and serves to map through the `notes` state passed as props to render individual `<li>`s for each passed note. In each `<li>`, there are `<p>` elements to display the `title` and `content` of each note, as well as a `button` that utilizes the `handleOnClick()` method to delete individual notes.

**<details>**
  <summary>Details</summary>
  
  * **`handleOnClick()`** Expects a single `event` argument, and calls the `handleRemoveNote()` method passed as props with the given event argument.
</details>

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [Babel Core](https://www.npmjs.com/package/babel-core) ~ npmjs.com/package/babel-core
  * [Babel Loader](https://www.npmjs.com/package/babel-loader) ~ npmjs.com/package/babel-loader
  * [Babel Plugin Transform Object Rest Spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) ~  npmjs.com/package/babel-plugin-transform-object-rest-spread
  * [Babel Preset Env](https://www.npmjs.com/package/babel-preset-env) ~ npmjs.com/package/babel-preset-env
  * [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) ~ npmjs.com/package/babel-preset-react
  * [CSS Loader](https://www.npmjs.com/package/css-loader) ~ npmjs.com/package/css-loader 
  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Enzyme](https://www.npmjs.com/package/enzyme) ~ npmjs.com/package/enzyme
  * [Enzyme Adapter React 16](https://www.npmjs.com/package/enzyme-adapter-react-16) ~ npmjs.com/package/enzyme-adapter-react-16
  * [Extract Text Webpack Plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ~ npmjs.com/package/extract-text-webpack-plugin
  * [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) ~ npmjs.com/package/html-webpack-plugin
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
  * [Node SASS](https://www.npmjs.com/package/node-sass) ~ npmjs.com/package/node-sass
  * [React](https://www.npmjs.com/package/react) ~ npmjs.com/package/react
  * [React DOM](https://www.npmjs.com/package/react-dom) ~ npmjs.com/package/react-dom
  * [SASS Loader](https://www.npmjs.com/package/sass-loader) ~ npmjs.com/package/sass-loader
  * [Superagent](https://www.npmjs.com/package/superagent) ~ npmjs.com/package/superagent
  * [UUID](https://www.npmjs.com/package/uuid) ~ npmjs.com/package/uuid
  * [Webpack](https://www.npmjs.com/package/webpack) ~ npmjs.com/package/webpack
  * [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) ~ npmjs.com/package/webpack-dev-server
</details>