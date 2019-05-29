const { prepareTransactions } = require('./prepareTransaction')
const { SubmitToServer } = require('./sumitToServer.js')
const KeyManager = require('./keymanager');

const { protobuf1 } = require('./payload');
var args = process.argv;
var batchlistBytes = null;
var keyManager = new KeyManager();
// var protobufpayload;
if (args.length > 2) {
    var payload = JSON.parse(args[3])
    var username = args[2];
    // protobuf1(payload).then((res) => {
    //     console.log("buffer", res)
    //     protobufpayload = res;

    if (keyManager.doesKeyExist(username)) {
        console.log("keys are already created for" + username);

    } else {
        var output = keyManager.createkeys(username);
        keyManager.savekeys(username, output);
    }
    if (keyManager.doesKeyExist(username)) {
        if (batchlistBytes = prepareTransactions(payload, username)) {
            SubmitToServer(batchlistBytes);
        }
    }
    // })
} else
    console.log("Payload is empty. Run with payload")