const express = require('express')
const app = express()
const port = 9000

app.get('/effective-date', (req, res) => {
  res.send({date: new Date})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})