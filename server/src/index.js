const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

//* Sincronizar la instancia de "Sequelize" al servidor
conn.sync({ force: false }) //* Retrona promesa !!!
   .then(() => {
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      });
   })
   .catch(error => console.log(error.message))
