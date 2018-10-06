# chorus-test-endpoint
A simple API endpoint server that logs POST requests to the console.  Useful for testing telemetry uploads from the chorus app.

## Install
`npm install`

## Build
`npm run tsc`

Invokes the TypeScript compiler to produce build/server.js

## Run
`node build/server.js`

Runs a server that listens for POST requests at http://localhost:3001/.  When it receives requests, it logs the request bodies to the console.
