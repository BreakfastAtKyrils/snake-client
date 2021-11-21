const { on } = require("events");
const { IP, PORT } = require("./constants");
const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
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