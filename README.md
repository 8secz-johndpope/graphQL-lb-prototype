# POWERDRIVE GRAPHQL-API

The project is to provide PowerDrive a central API and act as a microservice for different platform such as a mobile application, web app, or a 3rd party interfacing. 

It is based on ExpressJS with Loopback framework together with Apollo Server which will be running on top to act as a **GraphQL relay platform** in case PowerDrive server receive a request from another GraphQL clients so to interchange request and response with other 3rd party applications with both standard RESTful API and GraphQL.

# Prerequisites
You need to have at least NodeJS version 8 and onwards in order to run the following project. To install, please visit [NodeJS official site](https://nodejs.org/en/).
> Please refer to .env.sample file and create .env based of it before running.

## To run API server locally...
With Git clone
```
> git clone https://github.com/POWERDRIVE-IO/powerdrive-api-graphql.git 
> or by ssh - git@github.com:POWERDRIVE-IO/powerdrive-api-graphql.git
> then cd into the project directory - powerdrive-api-graphql
> npm install
> npm run build
> npm start
```

### To start local development server
```
> git clone https://github.com/POWERDRIVE-IO/powerdrive-api-graphql.git 
> or by ssh - git@github.com:POWERDRIVE-IO/powerdrive-api-graphql.git
> then cd into the project directory - powerdrive-api-graphql
> npm install
> npm run dev
```

Run the following command for cleaning up the build folder
```
> npm run cleanup
```