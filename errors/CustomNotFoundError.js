class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    //So the error is neat when stringified. "NotFoundErrror: message" instead of "Error: message"
    this.message = `NotFoundError`;
  }
}

module.exports = CustomNotFoundError;
