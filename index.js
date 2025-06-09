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
        const listUsers = readUsersFile()

        const users = listUsers.map(u => ({
            id: u.id,
            nome: `${u.nome} ${u.sobrenome}`,
            email: u.email
        }))

        res.status(200).json(users)
    
    } catch (error) {
        res.status(500).json({ erro: 'Erro Ao Buscar Usuários!' })
    }

})

app.get('/dados/:id', (req, res) => {
    try {
        const listUsers = readUsersFile()
        const user = listUsers.find(u => u.id === Number(req.params.id))

        if (!user) {
            return res.status(404).json({ erro: 'Usuário Não Encontrado!' })
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ erro: 'Erro Ao Buscar Usuários!' })
    }
})

app.listen(port, () => {
  console.log(`Server Rodando: http://localhost:${port}`)
})