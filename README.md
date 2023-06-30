<a name="readme-top"></a>

# <div align="center">🛰Space Travelers' Hub 🚀</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Live Demo](#live-demo)
    - [Walkthrough](#Walkthrough)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

# 📖 React & Redux group project - Space Travelers' Hub <a name="about-project"></a>

In this Project, the actual live data from the SpaceX API. The task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. project is a repository consisting of the following files:

- JS files
- CSS files
- Html, CSS, and JS linters file

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
      <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
      <li><a href="https://react.dev/learn/start-a-new-react-project#create-react-app">React </a></li>
       <li><a href="https://react-redux.js.org/">React Redux</a>
        <li><a href="https://www.npmjs.com/package/redux-logger">Redux Logger</a></li>
         <li><a href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/articles/react_router.md">React Router</a></li>
</ul>

###  Key Features <a name="key-features"></a>

-  Integration with external APIs: The React  Project integrates with external APIs to provide users with real-time data, such as space mission rockets, and dragon
-  Personalization options: Users can customize their profiles and preferences within the Space Travelers' Hub, enabling them to tailor their experience according to their individual needs and interests
-  Mission, rocket, and dragon Details: Users can access detailed information about Mission, rocket, and dragon by triggering an event on see more buttons
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌐 Live Demo <a name="#live-demo"></a>

- [Space Travelers' Hub Web App Live Demo](https://space-travelers-groupproject.onrender.com/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👁 Walkthrough <a name="#Walkthrough"></a>

[Space Travelers' Hub Web App Walkthrough](https://youtu.be/wRnMzZHLSas)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started with Create React App <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Microverse-JS-Capstone.git

### Prerequisites

To run this project you need:

- GitHub account;
- git installed on your OS.

### Install

> [Linters](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

- Installations required to run this project:

### Install the node module

- Run the following command:

```
npm install
```

### Creat the react

[Create react app](https://create-react-app.dev/docs/getting-started)

- Run the following command:

```
npx create-react-app my-app
cd my-app
npm start
```

### In order to import a CSS file add the style-loader and css-loader to your module configuration

- Run the following command:

```
npm install --save-dev style-loader css-loader
```

### Webhint installation.

- Run the following command:

```
npm install --save-dev hint@7.x
```

### Stylelint installation.

- Run the following command:

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

### ESLint

- Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:

Download all the dependencies run:

```
npm install
```

Track HTML linter errors run:

```
npx hint .
```

Track CSS linter errors run:

```
npx stylelint "**/*.{css,scss}"
```

Track JavaScript linter errors run:

```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu

- GitHub: [Benawi](https://github.com/Benawi)
- Linkdin: [Habtamu](https://www.linkedin.com/in/habtamualemayehu/)

### 👤 Mohammad Nahid Raihan Sardar

- GitHub: [Nahid1911](https://github.com/Benawi)
- Linkdin: [Nahid Raihan Sardar](https://www.linkedin.com/in/nahidraihan/)

### 👤 David Katende

- GitHub: [Katended ](https://github.com/Katended)
- Linkdin: [Katended ](www.linkedin.com/in/katendedavid)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- Add some animations style for the project💯
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, [issues](https://github.com/Nahid1911/space-travelers-proj-react/issues), and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We would like to thank the Microverse program for providing us with this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
