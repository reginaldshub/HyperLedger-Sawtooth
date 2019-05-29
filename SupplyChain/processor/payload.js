// var protobuf = require("protobufjs");

// function load(payloadBuffer) {
//     return new Promise((resolve, reject) => {
//         protobuf.load("../shared/supplyChain.proto", function(err, root) {
//             if (err)
//                 reject(err);
//             // Obtain a message type
//             var supplyChain = root.lookupType("supplyChainPackage.create_land_account")
//                 // Create a new message



//             var payloadBytesmessage = supplyChain.decode(payloadBuffer);
//             console.log("payloadBytesMessage", payloadBytesmessage)

//             var object = supplyChain.toObject(message, {
//                 longs: String,
//                 enums: String,
//                 bytes: String,
//             });
//             console.log("object", object)

//             resolve(payloadBytesmessage);
//             // serialization
//         })
//     })
// }



// async function protobuf1(payloadBuffer) {
//     const buffer = await load(payloadBuffer);
//     return buffer;
// }



// module.exports = { protobuf1 };