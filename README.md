# Lead Management Frontend - Teste Vaga Fullstack

Este projeto é um frontend desenvolvido em Angular Standalone para o sistema de gerenciamento de leads.

## Requisitos

- Node.js (versão recomendada: 18+)
- Angular CLI
- NPM ou Yarn

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/velhobit/lead-ts-front.git
   cd lead-ts-front
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração da API

O endpoint da API pode ser configurado no arquivo:

```ts
environment/environment.ts
```

Exemplo de configuração:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5270/api',
};
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, utilize:
```sh
npm start
```
O projeto estará disponível em `http://localhost:4200/`.

## Construindo o Projeto

Para gerar a versão de produção:
```sh
npm run build
```
Os arquivos gerados estarão na pasta `dist/`.

## Tecnologias Utilizadas

- Angular Standalone
- RxJS
- FontAwesome
- Google Fonts (Open Sans)
- SCSS para estilização
