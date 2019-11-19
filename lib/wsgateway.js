const axios = require('axios')

class WSGateway {
    constructor(endpointapi) {
        this.endpointapi = 'https://ws.premiumfast.net/api/v1'
        
        if(endpointapi) {
            this.endpointapi = endpointapi
        }
    }

    set token(token) {
        this._token = token
    }

    get token() {
        return this._token
    }

    set deviceid(deviceid) {
        this._deviceid = deviceid
    }

    get deviceid() {
        return this._deviceid
    }

    sendmessage(number, message) {
        let actionurl = 'message/send'

        if(Array.isArray(number)) {
            actionurl = 'message/sendbulk'
        }

        return axios.post(
            this.endpointapi + '/' + actionurl,
            {
                deviceid: this.deviceid,
                number: number,
                message: message
            },
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.token
                }
            }
        )
    }
}