import { dbSql } from "~/config/mysql";
class User {
  constructor({ name, email, password, avatar }) {
    this.email = email;
    this.avatar = avatar;
    this.name = name;
    this.password = password;
  }
  async create() {
    const [insertResult] = await dbSql.query("INSERT INTO users SET ?", this);
    const lastInsertId = insertResult.insertId;
    // Perform the SELECT operation to fetch the newly inserted row
    const [selectResult] = await dbSql.query(
      "SELECT * FROM users WHERE id = ?",
      [lastInsertId]
    );
    // The newly inserted row will be in selectResult[0]
    return selectResult[0];
  }
  static async findOne(obj) {
    const [rows] = await dbSql.query(
      `SELECT * FROM users WHERE ${Object.keys(obj)[0]} = ?`,
      [Object.values(obj)[0]]
    );
    return rows;
  }
}
export default User;
