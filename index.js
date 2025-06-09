const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.use(cors())

function readUsersFile() {
    const filePath = path.join(__dirname, 'data', 'usuarios.json')   
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

app.get('/usuarios', (req, res) => {
    try {
        const usuarios = readUsersFile()
        res.status(200).json(usuarios)
    
    } catch (error) {
        res.status(500).json({ erro: 'Erro Ao Buscar Usuários!' })
    }

})

app.get('/dados/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server Rodando: http://localhost:${port}`)
})