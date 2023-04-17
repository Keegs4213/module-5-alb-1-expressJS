class Logger {
  constructor() {
    this.id = Math.floor(Math.random() * 100000);
  }
  log(result) {
    console.log(
      `Hi user:[${this.id}]. Thanks for using my calculator! The result is: ${result}`
    );
  }
}
module.exports = Logger;
