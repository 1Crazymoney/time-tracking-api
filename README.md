# Time Tracking API
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Coverage Status](https://coveralls.io/repos/github/christroutner/babel-free-koa2-api-boilerplate/badge.svg?branch=unstable)](https://coveralls.io/github/christroutner/babel-free-koa2-api-boilerplate?branch=unstable) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/Permissionless-Software-Foundation/time-tracking-api.svg)](https://greenkeeper.io/)

This is a simple REST API server that works in conjuction with a front end user
interface. It allows groups of developers to easily and transparently track
time spent on projects. This information can then be used to compensate them with
tokens.

This repository is forked from
the [koa-api-boilerplate](https://github.com/christroutner/koa-api-boilerplate).


## Requirements
* node __^10.15.1__
* npm __^6.7.0__

## Installation
```bash
git clone https://github.com/christroutner/koa-api-boilerplate
```

## Structure
```
├── bin
│   └── server.js            # Bootstrapping and entry point
├── config                   # Server configuration settings
│   ├── env                  # Environment specific config
│   │   ├── common.js
│   │   ├── development.js
│   │   ├── production.js
│   │   └── test.js
│   ├── index.js             # Config entrypoint - exports config according to envionrment and commons
│   └── passport.js          # Passportjs config of strategies
|
├── production               # Dockerfile for build production container
|
├── src                      # Source code
│   ├── modules
│   │   ├── controller.js    # Module-specific controllers
│   │   └── router.js        # Router definitions for module
│   ├── models               # Mongoose models
│   └── middleware           # Custom middleware
│       └── validators       # Validation middleware
└── test                     # Unit tests
```

## Usage
* `npm start` Start server on live mode
* `npm run dev` Start server on dev mode with nodemon
* `npm run docs` Generate API documentation
* `npm test` Run mocha tests
* `docker-compose build` Build a 'production' Docker container
* `docker-compose up` Run the docker container

## Documentation
API documentation is written inline and generated by [apidoc](http://apidocjs.com/).

Visit `http://localhost:5000/docs/` to view docs


## Dependencies
* [koa2](https://github.com/koajs/koa/tree/v2.x)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-bodyparser](https://github.com/koajs/bodyparser)
* [koa-generic-session](https://github.com/koajs/generic-session)
* [koa-logger](https://github.com/koajs/logger)
* [MongoDB](http://mongodb.org/)
* [Mongoose](http://mongoosejs.com/)
* [Passport](http://passportjs.org/)
* [Nodemon](http://nodemon.io/)
* [Mocha](https://mochajs.org/)
* [apidoc](http://apidocjs.com/)
* [ESLint](http://eslint.org/)

## License
MIT
