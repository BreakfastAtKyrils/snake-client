const { on } = require("events");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('connect', () => {
    conn.write("Name: JFK")
    console.log('successfully connected')
  })

  conn.setEncoding("utf8");
  return conn;
}

module.exports = {
  connect,
}