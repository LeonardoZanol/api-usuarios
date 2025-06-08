const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.use(cors())

function readUsersFile() {
    const filePath = path.join(__dirname, 'data', 'usuarios.json')

    try {
        const data = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(data)
    
    } catch(err) {
        return null
    }

}

app.get('/usuarios', (req, res) => {
    const users = readUsersFile()
    console.log(users)
})

app.get('/dados/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server Rodando: http://localhost:${port}`)
})