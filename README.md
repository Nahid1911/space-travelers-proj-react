<a name="readme-top"></a>
### <div align="center"><a href="#"><img src="https://github.com/Benawi/Benawi/assets/21217148/de823737-5f7f-4de8-b62e-3fe88c238eab"/></a><a><img src="https://github.com/Katended/Katended/assets/43292406/e780a2cd-e49f-4780-a817-e854ccb46cdb"></a> </div> 
# <div align="center">🛰Space 🚀 Travelers' ☄ Hub</div> 

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

# 📖 React & Redux group project - Space Travelers' Hub  <a name="about-project"></a>

In this Project, the actual live data from the SpaceX API. The task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. project is a repository consisting of the following files:
- JS files
- CSS files
- Html, CSS, and JS linters file

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<ul>
  <ul>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
      <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
      <li><a href="https://react.dev/learn/start-a-new-react-project#create-react-app">React </a></li>
       <li><a href="https://react-redux.js.org/">React Redux</a>
        <li><a href="https://www.npmjs.com/package/redux-logger">Redux Logger</a></li>
         <li><a href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/articles/react_router.md">React Router</a></li>
</ul>


## 🔑 Key Features <a name="key-features"></a>

### Space Travelers' Hub React Project: [Requirements](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/project_space_travelers_hub.md)

### Features Added - Space Travelers' Hub: 
#### Config & basic setup
   - [x] Set up a new React application using   Create React App
   - [x] Set up the repository on GitHub and use Gitflow.
   - [x] Set up testing libraries(React Testing Library and Jest).
   - [x] React [Router V6](https://reactrouter.com/en/main/start/tutorial#setup) is installed
   - [x] **routes** and **view** components: `rockets`, `missions`, `my profile`. Add `dragons` are created
  - [x] Add Redux Toolkit (npm install react-redux @reduxjs/toolkit).
   - [x] Create a directory that will contain all your Redux logic (/src/redux)
   - [x] Configure a Redux store (/src/redux/store.js)
   - [x] Define a slice of state for all reducers
   - [x] `<NavLink />` for the page navigation links and active style class to indicate which section/page the user is currently on (underline active navigation link) is used.
  - [x] Directories for all Redux state slice files:`rockets`, `missions`, and `dragons` is created 
  - [x] Structure application files using a "feature folder" approach and the [ducks pattern](https://github.com/erikras/ducks-modular-redux) used for Redux files.
 - [x] Wrap `<App>` with the `<Provider>` component from react-redux
  - [x] Configured store passed into the `<Provider>`
  - [x] Create an initialState variable for  slices
#### Redux: Fetch data and update the Redux store   
  - [x] Upon first render data will be fetched  from the SpaceX API endpoints:
    - [x] Rockets: `https://api.spacexdata.com/v4/rockets`
    - [x] Missions: `https://api.spacexdata.com/v3/missions`
    - Dragons: `https://api.spacexdata.com/v4/dragons` 
- [x] Once the data are fetched, dispatch an action to store the selected data in the Redux store:
  - [x] Rockets:
    - id, rocket_name ,description, flickr_images
  - [x] Missions:
    - mission_id, mission_name, description
  - [x] Dragons :
    - id, name, type, flickr_images
  - [x] Those actions  dispatch only once  and do not add data to store on every re-render (i.e. when changing views / using navigation).
  - [x] _Rockets_ is the default view, so  _rockets_ data will be fetched when the application starts. 
  - [x] The _missions_ data and _dragon_ data  fetched (once) when a user navigates to the _Missions_ and _dragon_  section.
#### Render UI: lists
- [x] `useSelector()` Redux Hook is used to select the state slices and render lists of rockets, dragons, and missions in corresponding routes. 
- [x] The whole application styled "by hand" and  [React Bootstrap](https://react-bootstrap.github.io/), a UI library that could speed up the process. This is a popular library and working with its components would be good practice.
- [x] Render a list of rockets (as per design). For the image of a rocket the first image in the array of `flickr_images` is used.
- [x] Render a table with the missions' data ([as per design](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/images/space-travelers__missions.png)).
- [x]  Render a list of dragons ([as per design](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/images/space-travelers__rockets.png)). For the image of a dragon the first image in the array of `flickr_images`is used.
#### Redux: Write actions and reducers for booking rockets/dragons and joining missions
- [x]  When a user clicks the "Reserve rocket" button or "Reserve dragon" button action will be dispatched to update the store. get the ID of the reserved rocket and update the state. does not mutate the state. Instead, it returns a new state object with all rockets, but the selected rocket will have an extra key `reserved` with its value set to `true`. we use a JS `filter()` or `map()` to set the value of the new state.

- [x] All logic is placed in the reducer. In the React view file, we only dispatch the action with the correct rocket ID as an argument.
- [x] A reducer and action dispatcher for the "Join Mission" button is created. The logic is practically the same as with rockets - we pass the mission's ID to the corresponding action and update the mission's state with the selected mission having a new key/value - `reserved: true`.

#### Redux: Write actions and reducers for canceling rockets/dragons and leaving missions

- [x] Here we follow the same logic as with the "Reserve rocket"/"Reserve dragon" and "Join mission" - but we need to set the `reserved` key to `false`.
- [x] These actions are dispatched upon clicking on the corresponding buttons.

#### Render UI: conditional components rendering
- [x] Rockets that have already been reserved will show a "Reserved" badge and "Cancel reservation" button instead of the default "Reserve rocket" ([as per design](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/images/space-travelers__rockets.png)) .
- [x] Dragons that have already been reserved will show a "Reserved" badge and "Cancel reservation" button instead of the default "Reserve dragon" 
- [x] Missions that the user has joined already will show a badge "Active Member" instead of the default "NOT A MEMBER" and a button "Leave Mission" instead of the "Join Mission" button ([as per design](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/images/space-travelers__missions.png)).
- [x] Rockets/Dragons and Missions used the React conditional rendering syntax.

#### Render UI: My Profile section

- [x] Compose three column layout and list ONLY the rockets, dragons reserved, and missions joined by the user ([as per design](https://github.com/microverseinc/curriculum-react-redux/blob/main/group-project/images/space-travelers__my-profile.png)):
  - Render a list of all joined missions (`filter()` and `map()` used).
  - Render a list of all reserved rockets (`filter()` and `map()` used).
  - Render a list of all reserved dragons (`filter()` and `map()` used).
#### Test case add for all components and functions.

  - [x] Fetch data and update Redux store tested
  - [x] Mission, Dragon, Rockets, and My Profile section tested

#### Additional Features Added 
 - [x] The My Profile section is enhanced by adding a placeholder message when the "My Missions" or "My Rockets" lists are empty (no missions joined or no rockets/dragons reserved).
 - [x] The My Profile section was enhanced by adding the "Cancel reservation" and "Leave Mission" buttons to the lists here. Clicking them will dispatch the actions you have already used in the main Rockets/Dragons and Missions sections.
- [x] The My Profile section was enhanced by adding the "Read more" button for each mission and rocket/dragons. Upon clicking, it will open a corresponding Wikipedia page in a new tab. 
- [x] We get an extra Wikipedia URL from the API's payload.
- [x] In the browser tested ; it render without problems, [Space Travelers' Hub ](#)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌐 Live Demo <a name="#live-demo"></a>
- [Space Travelers' Hub Web App](#) 
- Learn More [How to deploy react app](https://github.com/gitname/react-gh-pages)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👁 Walkthrough <a name="#Walkthrough"></a>

[Live vedio](https://drive.google.com/file/d/1JdyRRXO2_W1Fq5bu_4MYirS2-VoofdFz/view?usp=sharing) 

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
-  Add some animations style for the project💯
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, [issues](https://github.com/Nahid1911/space-travelers-proj-react/issues), and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We would like to thank the Microverse program for providing us  with this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
