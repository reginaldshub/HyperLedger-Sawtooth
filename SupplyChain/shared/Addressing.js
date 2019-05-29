const { createHash } = require("crypto");
const env = require("../shared/env");

_hash1 = x => {
    return createHash("sha512")
        .update(x)
        .digest("hex")
        .toLowerCase()
        .substring(0, 60);
};

_hashforpayload = x => {
    return createHash("sha512")
        .update(x)
        .digest("hex");
};

const prefix = {
    Land: "00", //hard coded
    Farmer: "01",
    Inspector: "02",
    Business_Agent: "03",
    Retail_Agent: "04"
};

get_land_account_address = id => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    let _id = id.toString();
    return TP_NAMESPACE + prefix.Land + prefix.Farmer + _hash1(_id);
};

get_farmer_account_address = id => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    let _id = id.toString();
    return TP_NAMESPACE + prefix.Land + prefix.Farmer + _hash1(_id);
};

get_inspector_account_address = id => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    let _id = id.toString();
    return TP_NAMESPACE + prefix.Land + prefix.Inspector + _hash1(_id);
};


get_businessagent_account_address = id => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    let _id = id.toString();
    return TP_NAMESPACE + prefix.Land + prefix.Business_Agent + _hash1(_id);
};

get_retailagent_account_address = id => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    let _id = id.toString();
    return TP_NAMESPACE + prefix.Land + prefix.Retail_Agent + _hash1(_id);
};

get_all_land_address = () => {
    let TP_NAMESPACE = createHash("sha512")
        .update("supply-chain")
        .digest("hex")
        .toLowerCase()
        .substring(0, 64)
        .substring(0, 6);
    return TP_NAMESPACE + prefix.Land;
};

class Addresser {
    get_account_address(customer_id) {
        var cs_id = customer_id.toString();
        return env.TP_NAMESPACE + prefix.ACCOUNT + _hash1(cs_id);
    }

    get_record_address(record_id) {
        return env.TP_NAMESPACE + prefix.RECORD + _hash1(record_id);
    }

    get_address_type(address) {
        if (address.substring(0, 6) !== env.TP_NAMESPACE)
            return prefix.OTHER_FAMILY;

        infix = address.substring(6, 8);
        if (infix === "00") return prefix.ACCOUNT;
        if (infix === "01") return prefix.RECORD;
        if (infix === "02") return prefix.BANK_DEPOSIT_RECORD;
        return prefix.OTHER_FAMILY;
    }
}

module.exports = { _hash1, _hashforpayload, get_all_land_address, get_land_account_address, get_farmer_account_address, get_inspector_account_address, get_businessagent_account_address, get_retailagent_account_address };