var protobuf = require("protobufjs");
var protos = require("./../shared/supplyChain");

function protobuf1(payload) {
    // return new Promise((resolve, reject) => {
    console.log("payload", payload.verb);
    if (payload.verb == "create_land_account") {
        var CreateLandAccountMessage = protos.supplyChainPackage.CreateLandAccountParams.create();
        CreateLandAccountMessage.landId = payload.landId;
        CreateLandAccountMessage.landName = payload.landName;

        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action =
            protos.supplyChainPackage.PayLoad.Action.CREATE_LAND_ACCOUNT;
        payload1.createLandAccount = CreateLandAccountMessage;
        console.log("protoPayload", payload1);
        return payload1;
    } else if (payload.verb == "create_farmer_account") {
        var CreateFarmerAccountMessage = protos.supplyChainPackage.CreateFarmerAccountParams.create();
        CreateFarmerAccountMessage.farmerId = payload.farmerId;
        CreateFarmerAccountMessage.farmerName = payload.farmerName;

        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action =
            protos.supplyChainPackage.PayLoad.Action.CREATE_FARMER_ACCOUNT;
        payload1.createFarmerAccount = CreateFarmerAccountMessage;
        console.log("protoPayload", payload1);
        return payload1;
    } else if (payload.verb == "create_inspector_account") {
        var CreateInspecorAccountMessage = protos.supplyChainPackage.CreateInspecorAccountParams.create();
        CreateInspecorAccountMessage.inspectorId = payload.inspectorId;
        CreateInspecorAccountMessage.inspectorName = payload.inspectorName;

        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action =
            protos.supplyChainPackage.PayLoad.Action.CREATE_INSPECTOR_ACCOUNT;
        payload1.createInspectorAccount = CreateInspecorAccountMessage;
        console.log("protoPayload", payload1);
        return payload1;
    } else if (payload.verb == "create_businessagent_account") {
        var CreateBusinessAgentAccountMessage = protos.supplyChainPackage.CreateFarmerAccountParams.create();
        CreateBusinessAgentAccountMessage.businessagentId = payload.businessagentId;
        CreateBusinessAgentAccountMessage.businessagentName = payload.businessagentName;

        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action =
            protos.supplyChainPackage.PayLoad.Action.CREATE_BUSINESSAGENT_ACCOUNT;
        payload1.createBusinessagentAccount = CreateBusinessAgentAccountMessage;
        console.log("protoPayload", payload1);
        return payload1;
    } else if (payload.verb == "create_retailagent_account") {
        var CreateRetailAgentAccountMessage = protos.supplyChainPackage.CreateFarmerAccountParams.create();
        CreateRetailAgentAccountMessage.retailagentId = payload.retailagentId;
        CreateRetailAgentAccountMessage.retailagentName = payload.retailagentName;

        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action =
            protos.supplyChainPackage.PayLoad.Action.CREATE_RETAILAGENT_ACCOUNT;
        payload1.createRetailagentAccount = CreateRetailAgentAccountMessage;
        console.log("protoPayload", payload1);
        return payload1;
    } else if (payload.verb == "get_all_land") {
        let payload1 = protos.supplyChainPackage.PayLoad.create();
        payload1.action = protos.supplyChainPackage.PayLoad.Action.GET_ALL_LAND;
        console.log("protoPayload", payload1);
        return payload1;
    }

    // })
}

// async function protobuf1(payload) {
//     const buffer = await load(payload);
//     return buffer;
// }

module.exports = { protobuf1 };