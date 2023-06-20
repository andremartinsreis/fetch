const express = require('express')

const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/auth', (req, res) => {
    if (
        req.body.email === 'carlos@email.com'
        && req.body.password === '1234'
    ) {
        res.status(200)
        res.json({token: 'AKSHDKJASD(*&(*A&SD(*&ASD'})
    } else {
        res.status(401)
        res.json({error: 'Email e/ou senha inválidos'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})