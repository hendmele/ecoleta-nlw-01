# Ecoleta

Projeto criado durante a NLW #01 da RocketSeat

Objetivo é possibilitar aos usuários encontrar pontos de coletas de itens recicláveis através de aplicativo, mostrando localização, itens que o estabelecimento coleta e contato via Whatsapp ou E-mail.
A versão web permite cadastro de novos pontos com interface possibilitando cadastro de fotos e seleção de localização exata no mapa.

Desenvolvido utilizando [Node.js](https://github.com/nodejs/node), [React](https://github.com/facebook/react) e [React-Native](https://github.com/facebook/react-native).

Utilizadas ferramentas como [Express](https://github.com/expressjs/express), [Leaflet](https://github.com/PaulLeCam/react-leaflet), [Knex](https://github.com/knex/knex), [Typescript](https://github.com/Microsoft/TypeScript), [Joi](https://github.com/hapijs/joi), [Multer](https://github.com/expressjs/multer), [Expo](https://github.com/expo/expo), [Axios](https://github.com/axios/axios) e diversas outras.

## Recursos Disponíveis
### Backend
* Cadastro de novos pontos de coleta
* Listar pontos de coleta baseado em um filtro
* Listar detalhes de um ponto de coleta específico
* Listar itens recicláveis disponíveis para coleta

### Aplicação Web
* Cadastro de um novo ponto de coleta contendo
  * Nome
  * Email
  * Whatsapp
  * Posição no mapa
  * Cidade/Estato
  * Itens recicláveis coletados
  * Foto do estabelecimento

### Aplicação mobile
* Consulta de pontos de coleta através de filtro por cidade/estado
* Contato via Whatsapp ou E-mail
* Localização do estabelecimento diretamente no mapa

# Instalação/utilização

1. Clone o repositório
2. Execute `npm install` dentro de cada um das 3 pastas
3. Altere o endereço do seu servidor que contém o backend nos arquivos abaixo:
  * `server\src\controllers\ItemsController.ts` linha 12
  * `server\src\controllers\PointsController.ts` linha 23
  * `server\src\controllers\PointsController.ts` linha 41
  * `mobile\src\services\api.ts` linha 4
 

4. Inicie o servidor backend através de `npm run dev`
5. Inicie o front-end em React através de `npm start`
6. Inicie a aplicação mobile utilizando o Expo através de `expo start`
7. Instale o aplicativo Expo no seu celular e escaneie o QRCode para ter acesso à aplicação mobile

## Telas
### Aplicação Web
<img src="https://i.imgur.com/6N4gOnk.png" width="400" height="217"> <img src="https://i.imgur.com/wBuBKOO.png" width="400" height="217"> <img src="https://i.imgur.com/xyqenI1.png" width="400" height="217"> <img src="https://i.imgur.com/dtfjFC0.png" width="400" height="217">
### Aplicação Mobile
<img src="https://i.imgur.com/ALTsnwS.jpg" width="189" height="400"> <img src="https://i.imgur.com/wbZAahR.jpg" width="189" height="400"> <img src="https://i.imgur.com/Nu8YlhF.jpg" width="189" height="400">
