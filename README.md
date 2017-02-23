# Bootstrap and AngularJS 2 Single Page Application Kickstart

[![Build Status](https://travis-ci.org/jeantoledo/js-dev-env.svg?branch=master)](https://travis-ci.org/jeantoledo/js-dev-env) 
[![Build status](https://ci.appveyor.com/api/projects/status/yemhdgwf44osv9c0?svg=true)](https://ci.appveyor.com/project/jeantoledo/js-dev-env)

Full featured javascript development enviroment.

| Feature           | Recommended / Used |
| ------------------|:------------------:|
| Package Management| [npm](https://www.npmjs.com/)
| Package Security  | [Node Security](https://www.npmjs.com/package/nsp)
| Web Server        | [Node Express](http://expressjs.com/pt-br/)
| Build Automation  | [npm Scripts](https://docs.npmjs.com/misc/scripts)
| Transpiling       | [Typescript](http://www.typescriptlang.org/) (TS -> ES5)
| Bundling          | [Webpack 2](https://webpack.github.io/)
| Linting           | [ESlint](http://eslint.org/docs/rules/)
| Testing           | [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [JSdom](https://www.npmjs.com/package/jsdom)
| CI Server         | [Travis CI](https://travis-ci.org/) (Linux), [AppVeyor](https://www.appveyor.com/) (Windows)
| Http Observable   | [rxJS](http://reactivex.io/)
| Styles            | [SASS](http://sass-lang.com/)

## Frameworks / Tools Sugestions

Error Logging: [TrackJS](https://trackjs.com/pricing/)<br/>
Free Static Web Hosting: [Surge](http://surge.sh/)

## Recipes

### Updating all npm packages

```sh
npm i -g npm-check-updates
ncu -u --packageFile package.json
npm install
```

### Available npm scripts

```js
npm start                   // run app in dev mode on port 8080
npm run build               // run app in production mode on port 8080

npm run security-check      // check for vulnerabilities in npm packages
npm run share               // create a public link to the local running app
npm run lint                // run ESLint 
npm test                    // run mocha tests 
```

### Generating vendor bundle in production

Just include any vendor import used in app on src/vendor.js file!

### Mocking API

[Watch this](https://app.pluralsight.com/player?course=javascript-development-environment&author=cory-house&name=javascript-development-environment-m10&clip=9&mode=live)