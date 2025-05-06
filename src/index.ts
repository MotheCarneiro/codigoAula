import express from 'express'
import 'dotenv/config'
import rotas from './controladores/rotas'


const app = express()

app.use(express.json())
app.use(rotas)

app.listen(process.env.PORT)