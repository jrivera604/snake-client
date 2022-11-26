const net = require("net");
const {IP, PORT} = require('./constants')
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
   // interpret incoming data as text
  conn.setEncoding("utf8");
  // connection to the server
  conn.on("connect", () => {
    conn.write('JR');
    console.log("Successfully connected to game server");

  });
 
  
  return conn;
};



module.exports = connect