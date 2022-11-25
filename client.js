const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: '50541',
  });
  conn.on("connect", () => {
    conn.write('JRR');
    console.log("Successfully connected to game server");

    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500)
    // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};



module.exports = connect