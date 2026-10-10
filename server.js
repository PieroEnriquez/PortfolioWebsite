import express from 'express'
import path from 'node:path'

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(import.meta.dirname, 'dist')))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
