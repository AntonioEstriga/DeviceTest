import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { createConnection } from 'mysql2';
dotevnv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
const db = createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('The connection to the database was successful');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})