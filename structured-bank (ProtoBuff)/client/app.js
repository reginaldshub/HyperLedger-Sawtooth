const { prepareTransactions } = require('./prepareTransaction')
const { SubmitToServer } = require('./sumitToServer.js')
const KeyManager = require('./keymanager');

const { protobuf1 } = require('./payload');
var args = process.argv;
var batchlistBytes = null;
var keyManager = new KeyManager();

if (args.length > 2) {
    var payload = JSON.parse(args[3])
    var username = args[2];
    protobuf1(payload).then((res) => {
        console.log("buffer", res)
        var protobufpayload = res;

        if (keyManager.doesKeyExist(username)) {
            console.log("keys are already created for" + username);

        } else {
            var output = keyManager.createkeys(username);
            keyManager.savekeys(username, output);
        }
        if (keyManager.doesKeyExist(username)) {
            if (batchlistBytes = prepareTransactions(protobufpayload, username)) {
                SubmitToServer(batchlistBytes);
            }
        }
    })
} else
    console.log("Payload is empty. Run with payload")