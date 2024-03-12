class User {
  #email;
  #name;
  #password;
  #avatar = "";
  constructor({ name, email, password, avatar }) {
    this.#email = email;
    this.#avatar = avatar;
    this.#name = name;
    this.#password = password;
  }
}

export default User;
