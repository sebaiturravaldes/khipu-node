class Banks {
  constructor (axiosInstance) {
    this.axiosInstance = axiosInstance
  }

  list () {
    return this.axiosInstance.get('/banks')
  }
}

module.exports = Banks
