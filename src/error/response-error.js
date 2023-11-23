class ResponseError extends Error {
  constructor(status, messsage) {
    super(messsage)
    this.status = status
  }
}

export { ResponseError }