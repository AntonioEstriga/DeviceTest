import { createConnection } from 'mysql2/promise';
import * as dotevnv from "dotenv"

dotevnv.config()
const testDB = await createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
try {
  await testDB.connect();
} catch (error) {
  console.log("Database conection error");
}

export{testDB}
