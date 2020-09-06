# TODO APP

A simple TODO application done as a an attempt to _UDSM DHIS2 Development quiz_

## Prerequisites

1. [NodeJs (10 or higher)](https://nodejs.org)
2. npm (6.4.0 or higher), can be installed by running `apt install npm`
3. git, can be installed by running `apt install git`

## Setup

Clone this repository to your machine

Navigate to application root folder

Install all required dependencies for the app

```bash
npm install
```

## Development server

To start development server

`npm start`

Navigate to [http://localhost:4200](http://localhost:4200).

This command will require proxy-config.json file available in the root of your source code, usually this file has this format

```json
{
  "/api": {
    "target": "https://play.dhis2.org/2.32",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  },
  "/": {
    "target": "https://play.dhis2.org/2.32",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  }
}
```

We have provided `proxy-config.example.json` file as an example, make a copy and rename to `proxy-config.json`

## Build

To build the project run

`npm run build`

The build artifacts will be stored in the `dist/`, this will include a zip file ready for deploying to any DHIS2 instance.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contact

In case of anything regarding this project, do not hesitate to leave a comment or let me know directly through [email](mailto:rmaswi@outlook.com), [WhatsApp](wa.me/255744033739) or [Telegram](t.me/maswimr).

Also, you can follow me and get along on [Twitter](https://twitter.com/maswimrt), [Linkedin](https://www.linkedin.com/in/maswi-mussa-raphael-047a26b4/), [Facebook](https://www.facebook.com/raphael.raphael.165/) and [Instagram](https://www.instagram.com/maswimr/).
