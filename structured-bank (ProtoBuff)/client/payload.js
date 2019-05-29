var protobuf = require("protobufjs");
var protos = require("./../shared/structuredBank")

function protobuf1(payload) {
    // return new Promise((resolve, reject) => {
    console.log("payload", payload.verb)
    if (payload.verb == 'create_account') {
        var createAccountMessage = protos.structuredBankPackage.CreateAccountParams.create()
        createAccountMessage.customerId = payload.customerId
        createAccountMessage.customerName = payload.customerName
        createAccountMessage.savingsBalance = payload.savingsBalance
        createAccountMessage.checkingBalance = payload.checkingBalance

        var payload1 = protos.structuredBankPackage.PayLoad.create()
        payload1.action = protos.structuredBankPackage.PayLoad.Action.CREATE_ACCOUNT;
        payload1.createAccount = createAccountMessage;
        console.log("protoPayload", payload1)
        return payload1;
    } else if (payload.verb == 'deposit_money') {
        var depositMoneyMessage = protos.structuredBankPackage.DepositMoneyParams.create()
        depositMoneyMessage.customerId = payload.customerId
        depositMoneyMessage.amount = payload.amount

        var payload2 = protos.structuredBankPackage.PayLoad.create()
        payload2.action = protos.structuredBankPackage.PayLoad.Action.DEPOSIT_MONEY;
        payload2.depositMoney = depositMoneyMessage;
        console.log("deposit_money", payload2)
        return payload2;
    } else if (payload.verb == 'withdraw_money') {
        var WithDrawMoneyMessage = protos.structuredBankPackage.WithDrawMoneyParams.create()
        WithDrawMoneyMessage.customerId = payload.customerId
        WithDrawMoneyMessage.amount = payload.amount

        var payload3 = protos.structuredBankPackage.PayLoad.create()
        payload3.action = protos.structuredBankPackage.PayLoad.Action.WITHDRAW_MONEY;
        payload3.withdrawMoney = WithDrawMoneyMessage;
        console.log("withdraw_money", payload3)
        return payload3;
    } else if (payload.verb == 'transfer_money') {

        var TransferMoneyMessage = protos.structuredBankPackage.TransferMoneyParams.create();
        TransferMoneyMessage.sourceCustomerId = payload.sourceCustomerId
        TransferMoneyMessage.destCustomerId = payload.destCustomerId
        TransferMoneyMessage.amount = payload.amount

        var payload4 = protos.structuredBankPackage.PayLoad.create();
        payload4.action = protos.structuredBankPackage.PayLoad.Action.TRANSFER_MONEY;
        payload4.transferMoney = TransferMoneyMessage;
        console.log("transfer_money", payload4)
        return payload4;
    }
    // })
}

// async function protobuf1(payload) {
//     const buffer = await load(payload);
//     return buffer;
// }

module.exports = { protobuf1 };