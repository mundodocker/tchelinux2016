const express = require('express')
const sum = require('./src/sum')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Ola Tchê Linux!')
})

app.get('/sum', (req, res) => {
  if (!req.query.first || !req.query.second) {
    res.send('invalid values')

    return
  }

  const radix = 10

  const firstValue = parseInt(req.query.first, radix)
  const secondValue = parseInt(req.query.second, radix)

  const result = sum(firstValue, secondValue)

  res.send(`Sum: ${firstValue} + ${secondValue} = ${result}`)
})

app.listen(port, () => console.log(`Application running at port ${port}`))
