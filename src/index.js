import express from 'express'

const app = express()
const APPLICATION_NAME = 'Norn'
const HTTP_PORT = 3000

app.get('/', (req, res) => res.end('<h1>Hello, Norn!</h1>'))

app.listen(HTTP_PORT)

console.log(`${APPLICATION_NAME} running on port ${HTTP_PORT}!`)
