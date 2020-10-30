class Payment {
  constructor (axiosInstance) {
    this.axiosInstance = axiosInstance
  }

  withNotificationToken (notificationToken) {
    if (!notificationToken) {
      throw new Error('notificationToken not found')
    }
    return this.axiosInstance.get('/payments', { notificationToken })
  }

  /**
   *
   * @param {*} id khipu payment_id
   */
  read (id) {
    return this.axiosInstance.get(`/payments/${id}`)
  }

  create (params) {
    return this.axiosInstance.post('/payments', params)
  }

  delete (id) {
    return this.axiosInstance.delete(`/payments/${id}`)
  }
}

module.exports = Payment
