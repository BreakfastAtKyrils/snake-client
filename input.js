const { connect } = require("./client");
const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, MESSAGES } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", (stdin) => {
    handleUserInput(stdin)
}); 
  stdin.resume();
  return stdin;
};

const handleUserInput = function (stdin) {

    if (stdin === '\u0003') {
      process.exit();
    }
    if (stdin === MOVE_UP_KEY) {
      connection.write('Move: up')
    }
    if (stdin === MOVE_DOWN_KEY) {
      connection.write('Move: down')
    }
    if (stdin === MOVE_RIGHT_KEY) {
      connection.write('Move: right')
    }
    if (stdin === MOVE_LEFT_KEY) {
      connection.write('Move: left')
    }
    if (stdin === 'z') {
      connection.write(MESSAGES['z'])
    }
  
};

module.exports = {
  setupInput,
}