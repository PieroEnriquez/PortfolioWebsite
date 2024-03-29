const express = require('express')
const path = require('path')

const app = express()
const port = 5000 || process.env.PORT

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, async () => {
  try {
    console.log(`Server running at http://localhost:${port}`)
  } catch (error) {
    console.log(error)
  }
})
