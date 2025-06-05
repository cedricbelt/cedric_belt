const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
  },
})

app.use(cors())

app.get("/", (req, res) => {
  res.send("WebSocket server OK")
})

io.on("connection", (socket) => {
  console.log("🟢 Client connecté")

  socket.on("send-image", (data) => {
    console.log("📨 Image reçue :", data.fileName)
    socket.broadcast.emit("receive-image", data)
  })

  socket.on("disconnect", () => {
    console.log("🔴 Client déconnecté")
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`)
})
