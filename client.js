const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.78',
    port: '50541',
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect