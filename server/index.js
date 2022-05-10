import express from 'express'
import Controller from './src/controller';
const app = express()
const port = 8080

app.use(Controller);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})