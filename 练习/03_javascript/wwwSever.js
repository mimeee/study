const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'www/dist/')))

app.listen(9101, () => {
  console.log(`App listening at port 9101`)
})