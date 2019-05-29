var { _hash1 } = require("../shared/Addressing.js");
const { createHash } = require('crypto')
const env = {
    privateKey: process.env.PRIVATE_KEY || '',
    publicKey: process.env.PUBLIC_KEY || '',
    restApiUrl: process.env.REST_API_URL || 'http://localhost:8008',
    validatorUrl: "tcp://localhost:4004",
    familyName: 'supply-chain',
    familyVersion: '1.0',
    urlToPost: 'http://localhost:8008/batches',
    TP_NAMESPACE: createHash('sha512').update('supply-chain').digest('hex').toLowerCase().substring(0, 4)
}

module.exports = env