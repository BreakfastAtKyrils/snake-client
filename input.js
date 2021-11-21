const { connect } = require("./client");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {

  const stdin = process.stdin;

  stdin.on('data', (stdin) => {
    if (stdin === '\u0003') {
      process.exit();
    }

    if (stdin === 'w') {
      connection.write('Move: up')
    }
    if (stdin === 'a') {
      connection.write('Move: left')
    }
    if (stdin === 'd') {
      connection.write('Move: right')
    }
    if (stdin === 's') {
      connection.write('Move: down')
    }
  });
  
};

module.exports = {
  setupInput,
}