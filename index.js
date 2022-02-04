const express = require('express')
const cors  = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(cors())

const port = 9000

app.get('/effective-date', (req, res) => {
  res.send({date: new Date})
})

app.put('/effective-date', (req, res) => {
  console.log(req.body)
  res.send({date: new Date})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})