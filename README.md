# Projeto de EEN251-Microcontroladores e Sistemas Embarcados

## Esse projeto é uma compactação do Projeto com repositório de link <https://github.com/MauAgendar/mauagendar>

O projeto foi compactado devido ao fato de que temos a intenção de subir um servidor com ele em uma Raspberry Pi da qual tem pouca memória e processamento.

### Alunos

- Enrico Giannobile RA: 19.00610-0
- Ettore Padula Dalben RA: 20.00387-0
- Guilherme de Campos - RA: 20.00089-8
- Laura Caroline Pinto Correia RA: 20.00171-0
- Luis Guilherme de Souza Munhoz RA: 20.01937-8

![logo](https://avatars.githubusercontent.com/u/129552822?s=400&u=48a7f16b037ad21fe054d0aee8e59fb70a155a35&v)

## API para agendamento de consultas

### Tecnologias utilizadas

- NodeJS
- Express
- bcrypt
- jsonwebtoken
- Docker
- PostgreSQL
- Typescript
- SwaggerUI

### Como rodar o projeto

- Clone o repositório
- Altere o arquivo .env.example para .env e preencha as variáveis de ambiente
- Instale o docker, caso já não o tenha instalado, é possível encontrar o tutorial de instalação no site oficial do docker em : <https://docs.docker.com/engine/install/>
- Execute o comando `docker compose up --build -d` para subir o projeto
- Acesse o localhost:${PORTA_DEFINIDA_NO_ENV}/api para acessar o swagger e testar as rotas
- Altere o scheme para http caso esteja no localhost

### Expondo a api como servidor

- Caso queira expor a api como servidor, instale o ngrok ou rode o ngrok com docker e em seguida, configure o token de autenticação de seu usuário no arquivo do ngrok
- Digite no terminal: `ngrok http ${PORTA_DEFINIDA_NO_ENV}` para expor a api
- O ngrok disponibilizará um link para sua api, mantenha o scheme como https e teste as rotas.

### Mostrando funcionamento da aplicação
![imagem_raspberry](https://github.com/MauAgendar/mauagendar_api/assets/81170691/cb41b90e-3769-4f21-bf1c-71878557b580)

https://www.youtube.com/watch?v=Kw0iTpgiY5Q&ab_channel=LuisGuilhermedeSouzaMunhoz
![Sérgião](https://github.com/MauAgendar/mauagendar_api/assets/81170691/af947245-aee8-4715-98be-ead50c2d855e)
