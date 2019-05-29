const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction, InternalError } = require("sawtooth-sdk/processor/exceptions");
const cbor = require("cbor");
const env = require("../shared/env");

var protos = require("./../shared/supplyChain");

const { protobuf1 } = require("./payload");

var protobuf = require("protobufjs");

// const SimpleStoreState = require('./state');
const { get_all_land_address, get_land_account_address, get_farmer_account_address, get_inspector_account_address, get_businessagent_account_address, get_retailagent_account_address } = require("../shared/Addressing");

const encode = obj => Buffer.from(JSON.stringify(obj), "utf8");
const decode = buf => JSON.parse(buf);

class SmallBankHandler extends TransactionHandler {
    constructor() {
        super(env.familyName, [env.familyVersion], [env.TP_NAMESPACE]);
        this.signer_public_keys = "";
    }

    get_account(customer_id, state) {
        let address = get_account_address(customer_id);
        if (!address) {
            throw InvalidTransaction("Failed to load Account: {:?}", err);
        } else {
            return state
                .getState([address])
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.log("no account found");
                });
        }
    }

    // transfer_money(source_customer_id, dest_customer_id, amountToTransfer, state) {
    //     let source_account = get_account_address(source_customer_id);
    //     let dest_account = get_account_address(dest_customer_id);
    //     if (!source_account && !dest_account)
    //         throw new InvalidTransaction("Both source and dest accounts must exist")
    //     else {
    //         return state.getState([source_account]).then((stateEntries) => {
    //             const entry = stateEntries[source_account]
    //             let srcaccount = decode(entry);
    //             // console.log("srcaccount", srcaccount)
    //             if (srcaccount.account.customer_id != source_customer_id) {
    //                 throw new InvalidTransaction('Only an account owner should transfer money');
    //             }
    //             var srcbalance = srcaccount.account.savings_balance;
    //             // console.log("srcChecking Balance Before", srcbalance);

    //             // var srcsavingbalance = srcaccount.account.savings_balance;
    //             // console.log("srcSavings Balance", srcsavingbalance);

    //             if (srcbalance < amountToTransfer) {
    //                 throw new InvalidTransaction(`Insufficient funds in source checking account ${srcbalance}`)
    //             } else {
    //                 return state.getState([dest_account]).then((stateEntries) => {
    //                     const entry = stateEntries[dest_account];
    //                     let destacount = decode(entry);
    //                     let srcbalance1 = srcbalance - amountToTransfer;
    //                     srcaccount.account.savings_balance = srcbalance1;
    //                     let dstbalance = destacount.account.savings_balance;
    //                     dstbalance = dstbalance + amountToTransfer;
    //                     destacount.account.savings_balance = dstbalance;

    //                     console.log("Src SAavings Balance" + srcaccount.account.savings_balance)
    //                     console.log("Dest SAavings Balance " + destacount.account.savings_balance)

    //                     return state.setState({
    //                         [source_account]: encode(srcaccount, source_customer_id)
    //                     }).then((result) => {
    //                         console.log("amount is debited from" + result)
    //                         return state.setState({
    //                             [dest_account]: encode(destacount, dest_customer_id)
    //                         }).then((result) => {
    //                             console.log("the amount is credited to " + result)
    //                         }).catch((err) => {
    //                             console.log(err);
    //                         })
    //                     }).catch((err) => {
    //                         console.log(err);
    //                     })

    //                 })
    //             }
    //         })
    //     }
    // }

    // issue_cheque(source_customer_id, dest_customer_id, amountToTransfer, state) {
    //     let source_account = get_account_address(source_customer_id);
    //     let dest_account = get_account_address(dest_customer_id);
    //     if (!source_account && !dest_account)
    //         throw new InvalidTransaction("Both source and dest accounts must exist")
    //     else {
    //         return state.getState([source_account]).then((stateEntries) => {
    //             const entry = stateEntries[source_account]
    //             let srcaccount = decode(entry);
    //             if (srcaccount.customer_id != source_customer_id) {
    //                 throw new InvalidTransaction('Only an account owner should transfer money');
    //             }
    //             var srcbalance = srcaccount.account.checking_balance;
    //             if (srcbalance < amountToTransfer) {
    //                 throw new InvalidTransaction(`Insufficient funds in source checking account ${srcbalance}`)
    //             } else {
    //                 return state.getState([dest_account]).then((stateEntries) => {
    //                     const entry = stateEntries[dest_account];
    //                     let destacount = decode(entry);
    //                     let srcbalance1 = srcbalance - amountToTransfer;
    //                     srcaccount.account.checking_balance = srcbalance1;
    //                     let dstbalance = destacount.account.checking_balance;
    //                     dstbalance = dstbalance + amountToTransfer;
    //                     destacount.account.checking_balance = dstbalance;

    //                     console.log("Source Savings Balance", srcaccount.account.savings_balance);
    //                     console.log("Source Checking Balance", srcaccount.account.checking_balance);

    //                     console.log("Destination Savings Balance", destacount.account.savings_balance);
    //                     console.log("Destination Checking Balance", destacount.account.checking_balance);

    //                     return state.setState({
    //                         [source_account]: encode(srcaccount, source_customer_id)
    //                     }).then((result) => {
    //                         console.log("amount is debited from" + result)
    //                         return state.setState({
    //                             [dest_account]: encode(destacount, dest_customer_id)
    //                         }).then((result) => {
    //                             console.log("the amount is credited to " + result)
    //                         }).catch((err) => {
    //                             console.log(err);
    //                         })
    //                     }).catch((err) => {
    //                         console.log(err);
    //                     })

    //                 })
    //             }
    //         })
    //     }
    // }

    // clear_checking_balance(source_customer_id, amountToTransfer, state) {
    //     let source_account = get_account_address(source_customer_id);
    //     if (!source_account)
    //         throw new InvalidTransaction("Both source and dest accounts must exist")
    //     else {
    //         return state.getState([source_account]).then((stateEntries) => {
    //             const entry = stateEntries[source_account]
    //             console.log("ENtry", entry)
    //             let srcaccount = decode(entry);

    //             console.log("srcaccount", srcaccount)
    //             if (srcaccount.customer_id != source_customer_id) {
    //                 throw new InvalidTransaction('Only an account owner should transfer money');
    //             }
    //             var srcSavingbalance = srcaccount.account.savings_balance;
    //             var srcCheckingbalance = srcaccount.account.checking_balance;
    //             if (srcSavingbalance < amountToTransfer) {
    //                 throw new InvalidTransaction(`Insufficient funds in source checking account ${srcbalance}`)
    //             } else {
    //                 return state.getState([source_account]).then((stateEntries) => {
    //                     const entry = stateEntries[source_account];
    //                     let srcbalance1 = srcSavingbalance - amountToTransfer;
    //                     srcaccount.account.checking_balance += srcbalance1;
    //                     srcaccount.account.savings_balance = srcbalance1;

    //                     console.log("Savings Balance", srcaccount.account.savings_balance);
    //                     console.log("Checking Balance", srcaccount.account.checking_balance);

    //                     return state.setState({
    //                         [source_account]: encode(srcaccount, source_customer_id)
    //                     }).then((result) => {
    //                         console.log("amount is debited from" + result)
    //                     }).catch((err) => {
    //                         console.log(err);
    //                     })

    //                 })
    //             }
    //         })
    //     }
    // }

    // withdraw_money(customer_id, amountToWithDraw, state) {
    //     let address = get_account_address(customer_id)
    //     if (!address) {
    //         throw InvalidTransaction("Failed to load Account: {:?}", err)
    //     } else {
    //         return state.getState([address]).then((stateEntries) => {
    //             const entry = stateEntries[address]
    //             let account = decode(entry);
    //             console.log("account" + entry);
    //             console.log(account.account);
    //             if (account.customer_id != customer_id) {
    //                 throw new InvalidTransaction('Only an account owner can deposit money');
    //             } else {

    //                 console.log(account.account.savings_balance);
    //                 let balance = account.account.savings_balance;
    //                 if (balance < amountToWithDraw) {
    //                     throw new InvalidTransaction(`Not enough money. The amount should be lesser or equal to ${balance}`)
    //                 } else {
    //                     let newBalance = account.account.savings_balance - amountToWithDraw;
    //                     account.account.savings_balance = newBalance;
    //                     console.log("Updated Savings Balance", account.account.savings_balance);
    //                     console.log("Updated Checking Balance", account.account.checking_balance);
    //                     return state.setState({
    //                         [address]: encode(account, customer_id)
    //                     }).then((result) => {
    //                         console.log("the amount is debited" + result)
    //                     }).catch((err) => {
    //                         console.log(err);
    //                     })
    //                 }
    //             }
    //         })
    //     }
    // }

    // deposit_money(customer_id, amountToDeposit, state) {
    //     console.log("deposit_money_params", customer_id, amountToDeposit)
    //     let address = get_account_address(customer_id)
    //     console.log("deposit_money_address", address)
    //     if (!address) {
    //         throw InvalidTransaction("Failed to load Account: {:?}", err)
    //     } else {
    //         return state.getState([address]).then((stateEntries) => {
    //             const entry = stateEntries[address]
    //             let account = decode(entry);
    //             console.log("deposit_money_account", account)
    //             if (account.account.customer_id != customer_id) {
    //                 throw new InvalidTransaction('Only an account owner can deposit money');
    //             } else {
    //                 let balance = account.account.savings_balance + amountToDeposit;
    //                 account.account.savings_balance = balance;
    //                 console.log("Updated Savings Balance", account.account.savings_balance);
    //                 console.log("Updated Checking Balance", account.account.checking_balance);
    //                 // var ACCOUNT = account.account;
    //                 return state.setState({
    //                     [address]: encode(account, customer_id)
    //                 }).then((result) => {
    //                     console.log("the amount is credited")
    //                 }).catch((err) => {
    //                     console.log(err);
    //                 })
    //             }
    //         })
    //     }
    // }

    // get_balances(customer_id, state) {

    //     let address = get_account_address(customer_id)
    //     if (!address) {
    //         throw InvalidTransaction("Failed to load Account: {:?}", err)
    //     } else {
    //         return state.getState([address]).then((stateEntries) => {
    //             const entry = stateEntries[address]
    //             let account = decode(entry);
    //             if (account.customer_id != customer_id) {
    //                 throw new InvalidTransaction('Account Did not match');
    //             } else {
    //                 console.log("Updated Savings Balance", account.account.savings_balance);
    //                 console.log("Updated Checking Balance", account.account.checking_balance);
    //                 return state.setState({
    //                     [address]: encode(account, customer_id)
    //                 }).then((result) => {
    //                     console.log("the amount Displayed")
    //                 }).catch((err) => {
    //                     console.log(err);
    //                 })
    //             }
    //         })
    //     }
    // }

    create_land_account(state, id, name) {
        console.log("create_land_account_params", id, name);
        // let new_account_data = this.make_Account_To_JSON(id, name, savings, checking)
        let new_account_data = {
            land_id: id,
            land_name: name,
            public_key: this.signer_public_key
        };
        return this.save_land_account(state, new_account_data, id);
    }

    save_land_account(state, account, id) {
        let address = get_land_account_address(id);

        state
            .getState([address])
            .then(data => {
                const entry = data[address];
                console.log("entry", entry)
                if (entry.length == 0) {
                    console.log("no data");
                } else {
                    console.log("data:", decode(entry));
                    console.log("Encoded", entry.toString("base64"));
                }
            }).catch(err => {
                console.log("catch", err);
            });
        console.log("account", account);
        return state
            .setState({
                [address]: encode({ account, id })
            })
            .then(result => {
                // console.log("result",result);
            })
            .catch(err => {
                console.log(err);
            });
    }


    create_farmer_account(state, id, name) {
        console.log("create_farmer_account_params", id, name);
        let new_account_data = {
            farmer_id: id,
            farmer_name: name,
            public_key: this.signer_public_key
        };
        let address = get_farmer_account_address(id);
        state.getState([address]).then(data => {
                const entry = data[address];
                if (entry.length == 0) {
                    console.log("no data");
                } else {
                    console.log("data:", decode(entry));
                    console.log("Encoded", entry.toString("base64"));
                }
            })
            .catch(err => {
                console.log("catch", err);
            });
        console.log("account", new_account_data);
        return state
            .setState({
                [address]: encode({ new_account_data, id })
            })
            .then(result => {
                // console.log("result",result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    create_inspector_account(state, id, name) {
        console.log("create_inspector_account_params", id, name);
        let new_account_data = {
            inspector_id: id,
            inspector_name: name,
            public_key: this.signer_public_key
        };
        let address = get_inspector_account_address(id);
        state.getState([address]).then(data => {
                const entry = data[address];
                if (entry.length == 0) {
                    console.log("no data");
                } else {
                    console.log("data:", decode(entry));
                    console.log("Encoded", entry.toString("base64"));
                }
            })
            .catch(err => {
                console.log("catch", err);
            });
        console.log("account", new_account_data);
        return state
            .setState({
                [address]: encode({ new_account_data, id })
            })
            .then(result => {
                // console.log("result",result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    create_businessagent_account(state, id, name) {
        console.log("create_businessagent_account_params", id, name);
        let new_account_data = {
            businessagent_id: id,
            businessagent_name: name,
            public_key: this.signer_public_key
        };
        let address = get_businessagent_account_address(id);
        state.getState([address]).then(data => {
                const entry = data[address];
                if (entry.length == 0) {
                    console.log("no data");
                } else {
                    console.log("data:", decode(entry));
                    console.log("Encoded", entry.toString("base64"));
                }
            })
            .catch(err => {
                console.log("catch", err);
            });
        console.log("account", new_account_data);
        return state
            .setState({
                [address]: encode({ new_account_data, id })
            })
            .then(result => {
                // console.log("result",result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    create_retailagent_account(state, id, name) {
        console.log("create_retailagent_account_params", id, name);
        let new_account_data = {
            retailagent_id: id,
            retailagent_name: name,
            public_key: this.signer_public_key
        };
        let address = get_retailagent_account_address(id);
        state.getState([address]).then(data => {
                const entry = data[address];
                if (entry.length == 0) {
                    console.log("no data");
                } else {
                    console.log("data:", decode(entry));
                    console.log("Encoded", entry.toString("base64"));
                }
            })
            .catch(err => {
                console.log("catch", err);
            });
        console.log("account", new_account_data);
        return state
            .setState({
                [address]: encode({ new_account_data, id })
            })
            .then(result => {
                // console.log("result",result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    get_all_land(state) {
        let address = get_all_land_address();
        return state.getState(address).then(data => {
                // const entry = data[address];
                // if (entry.length == 0) {
                //     console.log("no data");
                // } else {
                //     console.log("data:", decode(entry));
                //     console.log("Encoded", entry.toString("base64"));
                // }
                console.log("get all data", data)
            })
            .catch(err => {
                console.log("catch", err);
            });
    }

    apply(transactionProcessRequest, state) {
        let header = transactionProcessRequest.header;
        this.signer_public_key = header.signerPublicKey;
        let parameters = cbor.decode(transactionProcessRequest.payload); // old code
        console.log("payload", parameters);
        // console.log("protos", protos.supplyChainPackage.PayLoad.Action.CREATE_ACCOUNT)

        if (parameters.action == protos.supplyChainPackage.PayLoad.Action.CREATE_LAND_ACCOUNT) {
            var temp = parameters.createLandAccount;
            console.log("parameters", temp.landId, temp.landName);
            return this.create_land_account(state, temp.landId, temp.landName);
        } else if (parameters.action == protos.supplyChainPackage.PayLoad.Action.CREATE_FARMER_ACCOUNT) {
            var temp = parameters.createFarmerAccount;
            console.log("parameters", temp.farmerId, temp.farmerName);
            return this.create_farmer_account(state, temp.farmerId, temp.farmerName);
        } else if (parameters.action == protos.supplyChainPackage.PayLoad.Action.CREATE_INSPECTOR_ACCOUNT) {
            var temp = parameters.createInspectorAccount;
            console.log("parameters", temp.inspectorId, temp.inspectorName);
            return this.create_inspector_account(state, temp.inspectorId, temp.inspectorName);
        } else if (parameters.action == protos.supplyChainPackage.PayLoad.Action.CREATE_BUSINESSAGENT_ACCOUNT) {
            var temp = parameters.createBusinessagentAccount;
            console.log("parameters", temp.businessagentId, temp.businessagentName);
            return this.create_businessagent_account(state, temp.businessagentId, temp.businessagentName);
        } else if (parameters.action == protos.supplyChainPackage.PayLoad.Action.CREATE_RETAILAGENT_ACCOUNT) {
            var temp = parameters.createRetailagentAccount;
            console.log("parameters", temp.retailagentId, temp.retailagentName);
            return this.create_retailagent_account(state, temp.retailagentId, temp.retailagentName);
        } else if (parameters.action == protos.supplyChainPackage.PayLoad.Action.GET_ALL_LAND) {
            console.log("GET_ALL_LAND parameters");
            return this.get_all_land(state);
        } else {
            throw new InvalidTransaction(`Didn't recognize Verb "${verb}".\nMust be one of "create_account,deposit_money,make_deposit,withdraw_money or transfer_money"`);
        }
    }
}

module.exports = SmallBankHandler;