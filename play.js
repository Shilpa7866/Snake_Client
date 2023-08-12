const net = require("net");
const { connected } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log(connected);// code that does something when the connection is first established
  });
  conn.on("data", (data) =>  {
    console.log("server says,", data); // code that does something when the connection is first established
   });

  return conn;
};

console.log("Connecting ...");
connect();
