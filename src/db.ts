import * as dotevnv from "dotenv"
import { createPool } from 'mysql2';

dotevnv.config()
const db = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

export{db}
