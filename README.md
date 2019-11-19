# PFN NodeJS Library WSGateway

This library for easy to use in PHP with composer installation. Please referer to our [REST API Documentation](https://docs.premiumfast.net/tutorials/whatsapp-gateway/rest-api) if you want to build in your own programing language.

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
```json
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
```json
{
    code: 200,
    message: 'success, all message in waiting list.'
}
```