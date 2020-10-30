const Wrapper = require('./Wrapper')
const Banks = require('./Banks')
const Payments = require('./Payments')

class Khipu {
  constructor ({ commerceId, secretKey }) {
    const { axiosInstance } = new Wrapper({ commerceId, secretKey })
    this.banks = new Banks(axiosInstance)
    this.payments = new Payments(axiosInstance)
  }
}

module.exports = Khipu
