import express from 'express'

const app = express()

app.get('/',(req, res) => {
    res.send('hello World')
})

app.listen(3000, () => {
    console.log('Server is runnung on http://localhost:3000')
})