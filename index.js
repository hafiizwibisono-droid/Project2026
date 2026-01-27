const express = require('express')
const os = require('os')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.json({
    app: 'Project2026',
    status: 'Deploy sukses 🚀',
    hostname: os.hostname(),
    port: PORT,
    time: new Date()
  })
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(PORT, () => {
  console.log('App running on port', PORT)
})
