import express from 'express'
import Controller from './src/controller';
import cors from 'cors'
const app = express()
const port = 8080
app.use(cors())
app.use(Controller);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})