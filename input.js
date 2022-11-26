const {controls} = require('./constants')

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
  // ctrl+c command to stop session
  if (key === '\u0003') {
    process.exit();
  } 
// use controls imported from constants
  if (controls[key]) {
    connection.write(controls[key]) 
    
  }
};

module.exports = setupInput
