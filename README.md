# Desafio Single Page Application (Google Books)

[![Build Status](https://travis-ci.org/jeantoledo/rd-spa-challenge.svg?branch=master)](https://travis-ci.org/jeantoledo/rd-spa-challenge) 

## Tecnologias utilizadas:

| Feature           | Tecnologia | Considerações
| ------------------|:------------------:|:---:|
| Package Management| [npm](https://www.npmjs.com/) | Prático, simples e poderoso. Outra opção seria o Yarn que vem crescendo muito ultimamente.
| Web Server        | [Node Express](http://expressjs.com/pt-br/) | Escolhi o Express porque prefiro ter mais flexibilidade para configurar o servidor de dev do meu jeito, além de poder fazer algumas configurações de performance para o servidor de produção. Aqui poderiamos usar também o lite-server ou webpack-dev-server (DEV), são opções válidas também, podem até ser mais produtivas também. A escolha foi por maior flexibilidade.
| Build Automation  | [npm Scripts](https://docs.npmjs.com/misc/scripts) | O gulp é uma opção válida nesse contexto, mas como já estou utilizando o webpack no projeto escolhi utilizar o npm por simplicidade, além de atender perfeitamente as necessidades da aplicação.
| Transpiling       | [Typescript](http://www.typescriptlang.org/) (TS -> ES5) | A escolha do Typescript é devido ao grande envolvimento da comunidade do angular 2 com Typescript, documentação na linguagem, etc. Se não utilizasse o Typescript aqui configuraria o babel e escreveria o code em (ECMAScript 2015) ES6. A nova versão do javascript ajuda muito na produtividade.
| Bundling          | [Webpack 2](https://webpack.github.io/) | Webpack está crescendo cada vez mais, gosto do webpack porque ele é altamente configurável e bem robusto, porém a curva de aprendizado é um pouco maior.
| Testing           | [Karma](https://karma-runner.github.io), [Jasmine](https://jasmine.github.io/), [Protractor](http://www.protractortest.org/) | É a configuração de testes recomendada pelo time do angular e adotada em grande número pela comunidade.
| CI Server         | [Travis CI](https://travis-ci.org/) | Serve para os propósitos deste desafio
| HTTP Observable   | [rxJS](http://reactivex.io/) | Além de ser a recomendação do time do angular, traz muitas vantagens em relação as promisses, como possibilidade de cancelamento da requisição.
| Styles            | [SASS](http://sass-lang.com/) | Preferencia pessoal, LESS e Stylus também são opções válidas
| UI/UX | [Bootstrap](https://getbootstrap.com/) | Tem uma comunidade muito grande e muito material de inspiração. Eu particularmente prefiro o Semantic UI, porém ainda é uma dúvida se o projeto está sendo mantido pelo time, um número grande de issues no github pode ser um indicativo disso. Outra opção seria o Material Design.

### Considerações sobre a arquitetura do projeto:

Para este projeto utilizei um starter kit de angular 2 e bootstrap que estou montando em meu github. O Angular cli é uma opção válida, porém ele abstrai o webpack e como não gostaria de perder a possibilidade de configurá-lo de forma personalizada. O Angular Seed é outra opção, porém ele não usa webpack, usa systemJS por isso escolhi investir mais tempo para criar o meu starter kit.
A Arquitetura do projeto eu mantive praticamente igual a recomendada pelo google para um projeto de angular 2, as pequenas modificações serão comentadas no código do projeto.

## Scripts disponíveis no projeto:

```sh
"npm install" : Instala os pacotes npm no projeto
"npm start": Roda o ambiente de dev na porta 8080
"npm test": Roda os testes (watch) usando Karma, configurei o PhantomJS para este projeto
"npm run test:once": Roda os testes uma única vez, utilizado para a automação de build, não é possível gerar a build de produção se os testes estiverem falhando.
"npm run build": roda a build de produção e joga os arquivos na pasta dist.
"npm run build:serve": roda a aplicação na porta 8080 usando a pasta dist,
```
