import "dotenv/config";
import mysql from "mysql2/promise";
const dbConfig = process.env;
const connection = mysql.createPool({
  host: dbConfig.SQL_HOST,
  user: dbConfig.SQL_USER,
  password: dbConfig.SQL_PASS,
  database: dbConfig.SQL_NAME,
});
const connectToSql = async () => {
  try {
    await connection.query("select 1 ");
    console.log("connect to mysql successfully");
  } catch (error) {
    console.log("Error when connect to mysql: ", error.message);
    process.exit(1);
  }
};
export { connectToSql, connection as dbSql };
