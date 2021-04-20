
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('inicio')
})

app.get('/contacto', (req, res) => {
    res.send('contacto')
})
app.get('/info', (req, res) => {
    res.send('informacion')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
