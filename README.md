# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


SWA Commands
To start/Run the App in Development server(local). More details https://www.npmjs.com/package/@azure/static-web-apps-cli
    swa start http://localhost:3000 --run "npm start"

Option 2:(Preferred)
    swa start build --api-location api

To run only functions
go to api folder (cd api)
    1. npm build    
    2. func start

