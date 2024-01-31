require("dotenv").config()
const app = require("./src/App/app")
const http = require("http")
require("./src/config/dbConnect")
// console.log(app)
const port = process.env.PORT || 2040;
const server = http.createServer(app)

server.listen(port, console.log("server started"))