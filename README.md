# <img src="/src/assets/images/logo.jpg" alt="MetalVault Logo" width="50"/> RockNRollArchive

Store all photos/videos of concerts.

## Description

This API is a music archive that allows users to search for artists and concerts I've been lucky enough to attend. This project will be attached to a Front which will be there to expose all this data.

## Technologies

- Node.js
- Koajs
- Typescript

## Installation

To install the project, you need to clone the repository and install the dependencies.

```bash
yarn install
```

After that, you can run the project with the following command:

```bash
yarn dev
```

## API Endpoints

- Concert Medias

  - GET /concert/:id/medias
  - GET /concert/:id/media/:id
  - POST /concert/:id/media
  - PUT /concert/:id/media/:id
  - DELETE /concert/:id/media/:id

- Concerts

  - GET /concerts
  - GET /concert/:id
  - POST /concert
  - PUT /concert/:id
  - DELETE /concert/:id

- Band Members

  - GET /band/:id/members
  - GET /band/:id/member/:id
  - POST /band/:id/member
  - PUT /band/:id/member/:id
  - DELETE /band/:id/member/:id

- Bands

  - GET /bands
  - GET /band/:id
  - POST /band
  - PUT /band/:id
  - DELETE /band/:id

- Members

  - GET /members
  - GET /member/:id
  - POST /member
  - PUT /member/:id
  - DELETE /member/:id

- Medias

  - GET /medias
  - GET /media/:id
  - POST /media
  - PUT /media/:id
  - DELETE /media/:id

### More Informations

The Logo was created by using Adobe Firefly AI.
