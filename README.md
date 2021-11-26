### Personal Finance Systems (Sistema pessoal de finanças)
(Projeto feito para colocar aprendizado inicial do TypeScript e Styled Components)

### Functionalities

+ 

+ 

+ 

<h2 align="center">Screen Main</h2>

<p align="center"><img src="" alt="Foto da tela principal" /></p>

### Instalation Frontend

1. `npx create-react-app cliente --template typescript` (_--template typescript_ --> adding typescript)

2. `npm install styled-components` (lib css with js)

3. `npm install -D @types/styled-components` (adding the types)


<h3>OBS: Apareceu esse erro de typescript</h3>

```
TypeScript/todo/node_modules/react/jsx-runtime.js' implicitly has an 'any' type.
```
solucionado com essa adição ` "noImplicitAny": false` em `tsconfig.json` (adicionado dentro do primeiro objeto) 