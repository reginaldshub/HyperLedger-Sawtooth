const { createHash } = require('crypto')
const env = require('../shared/env');

_hash1 = (x) => {
    return createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 62);
}

_hashforpayload = (x) => {
    return createHash('sha512').update(x).digest('hex');
}

const prefix = {
    ACCOUNT: '00',
    RECORD: '01',
    OTHER_FAMILY: '100',
}

get_account_address = (customer_id) => {
    let TP_NAMESPACE = createHash('sha512').update('sample-bank').digest('hex').toLowerCase().substring(0, 64).substring(0, 6)
    console.log("namespace" + TP_NAMESPACE);
    var cs_id = customer_id.toString();
    return TP_NAMESPACE + prefix.ACCOUNT + _hash1(cs_id)
}

class Addresser {
    get_account_address(customer_id) {
        var cs_id = customer_id.toString();
        return env.TP_NAMESPACE + prefix.ACCOUNT + _hash1(cs_id)
    }

    get_record_address(record_id) {
        return env.TP_NAMESPACE + prefix.RECORD + _hash1(record_id)
    }

    get_address_type(address) {

        if (address.substring(0, 6) !== env.TP_NAMESPACE)
            return prefix.OTHER_FAMILY

        infix = address.substring(6, 8)
        if (infix === '00')
            return prefix.ACCOUNT
        if (infix === '01')
            return prefix.RECORD
        if (infix === '02')
            return prefix.BANK_DEPOSIT_RECORD
        return prefix.OTHER_FAMILY
    }
}

module.exports = { _hash1, _hashforpayload, get_account_address }