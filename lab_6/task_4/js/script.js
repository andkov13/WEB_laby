class Client {
    #login;
    #email;
  
    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }
  
    get login() {
      return this.#login;
    }

    set login(newLogin) {
      this.#login = newLogin;
    }

    get email() {
      return this.#email;
    }

    set email(newEmail) {
      this.#email = newEmail;
    }
}
  
const client = new Client('user123', 'user123@example.com');
  
console.log(client.login); 
console.log(client.email); 
  
client.login = 'newUser123';
client.email = 'newUser123@example.com';
  
console.log(client.login); 
console.log(client.email); 
  