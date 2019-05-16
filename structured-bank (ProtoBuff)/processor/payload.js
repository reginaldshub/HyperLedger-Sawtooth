var protobuf = require("protobufjs");

function load(payloadBuffer) {
return new Promise((resolve, reject) => {
protobuf.load("../shared/structuredBank.proto", function(err, root) {
if (err)
reject(err);
// Obtain a message type
var structuredBank = root.lookupType("structuredBankPackage.create_account")
// Create a new message



var payloadBytesmessage = structuredBank.decode(payloadBuffer);
console.log("payloadBytesMessage",payloadBytesmessage)

var object = structuredBank.toObject(message, {
    longs: String,
    enums: String,
    bytes: String,
});
console.log("object",object)

resolve(payloadBytesmessage);
// serialization
})
})
}



async function protobuf1(payloadBuffer){
const buffer = await load(payloadBuffer);
return buffer; 
}



module.exports = {protobuf1};