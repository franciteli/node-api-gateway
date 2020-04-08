# node-api-gateway
Exemplo de Api Gateway com Node

O Gateway nada mais é que um único canal de acesso à diversas APIs.

Pré-requisito:

- Instalar o Nodejs (https://nodejs.org/pt-br/download/)

Após instalado, realizar os seguintes passos para execução:

1 - Navegar até a pasta driversAPI e executar o comando npm install
2 - Navegar até a pasta vehiclesAPI e executar o comando npm install
3 - Navegar até a pasta gateway e executar o comando npm install

Com isso todas as dependências necessárias foram instaladas.

Agora vamos executar o projeto:

1 - Navegar até a pasta driversAPI e executar o comando node index.js (para subir a API de drivers)
2 - Navegar até a pasta vehiclesAPI e executar o comando node index.js (para subir a API de vehicles)
2 - Navegar até a pasta gateway e executar o comando node server.js (para subir o Gateway)

Agora, vamos testar:

http://localhost:3000/vehicles
http://localhost:3000/drivers


