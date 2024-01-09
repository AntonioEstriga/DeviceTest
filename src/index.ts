import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './device/device.routes.ts'

const PORT = process.env.PORT || 3000
console.log(process.env.PORT)
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use('/device', router)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
