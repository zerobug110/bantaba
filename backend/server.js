const app = require("./App/app")
const http = require("http")
// console.log(app)
const port = process.env.PORT || 2020;
const server = http.createServer(app)

server.listen(port, console.log("server started"))