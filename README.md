# Desafio Single Page Application (Google Books)

[![Build Status](https://travis-ci.org/jeantoledo/rd-spa-challenge.svg?branch=master)](https://travis-ci.org/jeantoledo/rd-spa-challenge) 

## 16/03/2017 - Melhorias efetuadas

- Paginação da Pesquisa: Identifiquei um problema na paginação dos livros que retornava resultados diferentes dos esperados, isso acontece porque a api do google não os retorna em sua chamada. O motivo segundo um profissional do google é que ela foi desenvolvida para retornar resultados de forma mais rápida possível e por consequência o campo "totalItems" (que estava sendo utilizado para a paginação) não é confiável, pois ele é ajustado conforme mais persquisas são feitas. A resposta do funcionário do google pode ser visualizada no [seguinte link](https://productforums.google.com/forum/#!topic/books-api/dh21NHD3cYo;context-place=topicsearchin/books-api/pagination). 
A solução encontrada para contornar o problema foi alterar a paginação para o uso de botões "previous" e "next" para navegação entre páginas. Além disso, para descobrir quando os resultados foram todos visualizados e esconder o botão next faço a requisição da página subsequente sempre que o usuário visualiza uma página, para a versão definitiva o ideal seria usar esse resultado da requisição (que foi guardado em memória) para fazer uma requisição a menos. Como é apenas uma questão de performance decidi focar o resto do tempo em outras melhorias na app.
- Loading na pesquisa: Adicionei um overlay de loading que traz um feedback visual de que a pesquisa está sendo feita. Foi componentizado no modulo "ui" para utilização neste e em outros sistemas.
- Feedback visual de favoritos: Criei um componente de alert do bootstrap para ser utilizado no sistema, utilizei o mesmo para mostrar mensagens quando o usuário adiciona ou remove um livro dos favoritos. Também modifiquei a cor de hover da estrela de favoritos, para não parecer que um livro continua como favorito quando é retirado dos favoritos.

Observação final: Tentei dar prioridade para resolver os bugs mais críticos, que impediam o funcionamento correto da aplicação ou poderiam passar a impressão de que a mesma não estava funcionando corretamente.

## Tecnologias utilizadas:

| Feature           | Tecnologia | Considerações
| ------------------|:------------------:|:---:|
| Package Management| [npm](https://www.npmjs.com/) | Prático, simples e poderoso. Outra opção seria o Yarn que vem crescendo muito ultimamente.
| Web Server        | [Node Express](http://expressjs.com/pt-br/) | Escolhi o Express porque prefiro ter mais flexibilidade para configurar o servidor de dev do meu jeito, além de poder fazer algumas configurações de performance para o servidor de produção. Aqui poderíamos usar também o lite-server ou webpack-dev-server (DEV), são opções válidas também, podem até ser mais produtivas também. A escolha foi por maior flexibilidade.
| Build Automation  | [npm Scripts](https://docs.npmjs.com/misc/scripts) | O gulp é uma opção válida nesse contexto, mas como já estou a utilizar o webpack no projeto escolhi utilizar o npm por simplicidade, além de atender perfeitamente as necessidades da aplicação.
| Transpiling       | [Typescript](http://www.typescriptlang.org/) (TS -> ES5) | A escolha do Typescript é devido ao grande envolvimento da comunidade do angular 2 com Typescript, documentação na linguagem, etc. Se não utilizasse o Typescript aqui configuraria o babel e escreveria o code em (ECMAScript 2015) ES6. A nova versão do javascript ajuda muito na produtividade.
| Bundling          | [Webpack 2](https://webpack.github.io/) | Webpack está a crescer cada vez mais, é altamente configurável e bem robusto, porém a curva de aprendizado é um pouco maior.
| Testing           | [Karma](https://karma-runner.github.io), [Jasmine](https://jasmine.github.io/), [Protractor](http://www.protractortest.org/) | É a configuração de testes recomendada pelo time do angular e adotada em grande número pela comunidade.
| CI Server         | [Travis CI](https://travis-ci.org/) | Serve para os propósitos deste desafio
| HTTP Observable   | [rxJS](http://reactivex.io/) | Além de ser a recomendação do time do angular, traz muitas vantagens em relação as promisses, como possibilidade de cancelamento da requisição.
| Styles            | [SASS](http://sass-lang.com/) | Preferência pessoal, LESS e Stylus também são opções válidas
| UI/UX | [Bootstrap](https://getbootstrap.com/) | Tem uma comunidade muito grande e muito material de inspiração. Eu particularmente prefiro o Semantic UI, porém ainda é uma dúvida se o projeto está sendo mantido pelo time, um número grande de issues no github pode ser um indicativo disso. Outra opção seria o Material Design.

### Considerações sobre a arquitetura do projeto:

Para este projeto utilizei um starter kit de angular 2 e bootstrap que estou montando em meu github. O Angular cli é uma opção válida, porém ele abstrai o webpack e como não gostaria de perder a possibilidade de configurá-lo de forma personalizada. O Angular Seed é outra opção, porém ele não usa webpack, usa systemJS por isso escolhi investir mais tempo para criar o meu starter kit.
A Arquitetura do projeto eu mantive praticamente igual a recomendada pelo google para um projeto de angular 2, as pequenas modificações serão comentadas no código do projeto.

## Scripts disponíveis no projeto:

```sh
"npm install" : Instala os pacotes npm no projeto
"npm start": Roda o ambiente de dev na porta 8080
"npm test": Roda os testes uma única vez, utilizado para a automação de build, não é possível gerar a build de produção se os testes estiverem falhando.
"npm run test:watch": Roda os testes (watch) usando Karma, configurei o PhantomJS para este projeto
"npm run build": roda a build de produção e joga os arquivos na pasta dist.
"npm run build:only": roda a build de produção e joga os arquivos na pasta dist sem executar os testes.
"npm run build:serve": roda a aplicação na porta 8080 usando a pasta dist.
```

## Sugestão de server para rodar a aplicação se não quiser usar o express:

[http-server](https://www.npmjs.com/package/http-server)

## Backlog de melhorias:

| Melhoria             |
| ---------------------|
| Melhorar responsividade dos cards e da página de detalhes do livro
| Formatar as URL's que faltam para um bom SEO
| Cancelar a requisição de uma página quando outra for selecionada (rxJS)
| Lidar com o limite do localstorage para guardar favoritos
| Lidar com o limite da api para requisições (criar uma apikey ou implementar oAuth2)
| Resolver bug do estilo de menu ativo quando tem query string
| Fallback da CDN para servidor dev
| Tooltip nos call to action dos cards
| Adicionaria ts lint ao projeto
| Adicionar mais testes
| O feedback visual de menu ativo não está funcionando para links query string
