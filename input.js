const { connect } = require("http2");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } 

  if (key === 'd') {
    connection.write('Move: right')
    console.log(key)
  }

  if (key === 'w') {
    connection.write('Move: up')
    console.log(key)
  }

  if (key === 'a') {
    connection.write('Move: left')
    console.log(key)
  }

  if (key === 's') {
    connection.write('Move: down')
    console.log(key)
  }

  if (key === 'r') {
    connection.write('Say: Noob')
  }

};

module.exports = setupInput
