# PFN NodeJS Library WSGateway

[![npm version](https://badge.fury.io/js/%40premiumfastnet%2Fwsgateway.png)](https://badge.fury.io/js/%40premiumfastnet%2Fwsgateway)

This library for easy to use in NodeJS with NPM or Yarn installation. Please referer to our [REST API Documentation](https://docs.premiumfast.net/tutorials/whatsapp-gateway/rest-api) if you want to build in your own programing language.

## Installation

```
npm i @premiumfastnet/wsgateway
```

# How to Use

## Send Message Example

- Request
```javascript
const wa = new WSGateway()
wa.token = 'YOUR-TOKEN-HERE'
wa.deviceid = 'YOUR-DEVICE-ID'
wa.sendmessage('0812xxxxxxxx','test from nodejs')
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.error(err)
})
```

- Response
```
{
    code: 200,
    message: 'success, message will be send in background.'
}
```

## Send Bulk Message Example

- Request
```javascript
const wa = new WSGateway()
wa.token = 'YOUR-TOKEN-HERE'
wa.deviceid = 'YOUR-DEVICE-ID'
wa.sendmessage(['08xxxx', '08xxxxx'],'test from nodejs')
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.error(err)
})
```

- Response
```
{
    code: 200,
    message: 'success, all message in waiting list.'
}
```

## Send Bulk Message to Contact Group

- Request
```javascript
const wa = new WSGateway()
wa.token = 'YOUR-TOKEN-HERE'
wa.deviceid = 'YOUR-DEVICE-ID'
wa.sendgroup('xxxx', 'test from nodejs')
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.error(err)
})
```

- Response
```
{
    code: 200,
    message: 'success, all message in waiting list.'
}
```