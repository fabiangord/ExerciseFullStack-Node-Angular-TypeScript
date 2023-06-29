import express from 'express'
import routesInfo from './routes/info.routes'
import 'dotenv/config'
import './db' 

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/api/v1', routesInfo)

app.listen(PORT, () => {
  console.log(`Recibiendo en el puerto ${PORT}`)
})
