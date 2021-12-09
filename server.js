const parent = require("json-server")
const server = parent.create()
const host = parent.router("task.json")
var port = process.env.PORT || 5500
server.use(host)
server.listen(port);