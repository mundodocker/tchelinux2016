const express = require('express')
const sum = require('./src/sum')

const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.get('/math', (req, res) => {
  const radix = 10

  const firstValue = parseInt(req.query.first, radix)
  const secondValue = parseInt(req.query.second, radix)

  switch (req.query.operation) {
    case 'sum':
      const result = sum(firstValue, secondValue)

      res.send(`Soma: ${firstValue} + ${secondValue} = ${result}`)
      break
    default:
      res.send('Operation not found')
      break
  }
})

app.listen(port, () => console.log(`Application running at port ${port}`))
