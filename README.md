# Khipu

## Complete documentation

This library is an implementation made in javascript of the [Khipu API](https://cl.khipu.com/page/api-referencia/), it is incomplete and only contemplates functionalities that will be used by banks and payments, if you want to add the rest, do it without problems.

## Support Version

this library support version 2.0 [Khipu Api](https://cl.khipu.com/page/api)

### Install

```bash
npm install --save khipu
```

## Getting started

### Authenticate with your Commerce ID Key, and Secret Key

Make sure you have created your free account on [Khipu](https://khipu.com) and that you have your **Credentials**.

```javascript
import Khipu from 'khipu'

const khipu = new Khipu({
  commerceId: 'COMMERCE_ID',
  secretKey: 'YOUR_SECRET_KEY'
})
```

### Payments

#### Payments with notification token

```javascript
khipu.payments
  .withNotificationToken({
    notification_token: 'string'
  })
  .then(response => {})
  .catch(error => console.log(error)) // Handle the error.
```
#### Create payment

```javascript
khipu.payments
  .create({
    subject: 'First Product',
    currency: 'CLP',
    amount: '1000'
  })
  .then(response => {})
  .catch(error => console.log(error)) // Handle the error.
```

#### Read payment

```javascript
khipu.payments
  .read(paymentId)
  .then(response => {})
  .catch(error => console.log(error)) // Handle the error.
```

#### Delete payment

```javascript
khipu.payments
  .delete(paymentId)
  .then(response => {})
  .catch(error => console.log(error)) // Handle the error.
```

### Banks

#### list banks

```javascript
khipu.banks
  .list()
  .then(response => {})
  .catch(error => console.log(error)) // Handle the error.
```