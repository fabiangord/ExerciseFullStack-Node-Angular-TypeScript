import express from 'express'
import routesInfo from './routes/info.routes'
import 'dotenv/config'
import './db'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/v1', routesInfo)

app.listen(PORT, () => {
  console.log(`Recibiendo en el puerto ${PORT}`)
})
