const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/usuarios', (req, res) => {
    
})

app.get('/dados/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server Rodando: http://localhost:${port}`)
})