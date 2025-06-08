const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.use(cors())

function readUsersFile() {
    const filePath = path.join(__dirname, 'data', 'usuarios.json')

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao Ler o Arquivo de Usuários.' })
        }

        res.json(JSON.parse(data))

    })
}

app.get('/usuarios', (req, res) => {
    
})

app.get('/dados/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server Rodando: http://localhost:${port}`)
})