/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.supplyChainPackage = (function() {

    /**
     * Namespace supplyChainPackage.
     * @exports supplyChainPackage
     * @namespace
     */
    var supplyChainPackage = {};

    supplyChainPackage.PayLoad = (function() {

        /**
         * Properties of a PayLoad.
         * @memberof supplyChainPackage
         * @interface IPayLoad
         * @property {supplyChainPackage.PayLoad.Action|null} [action] PayLoad action
         * @property {supplyChainPackage.ICreateLandAccountParams|null} [createLandAccount] PayLoad createLandAccount
         * @property {supplyChainPackage.ICreateFarmerAccountParams|null} [createFarmerAccount] PayLoad createFarmerAccount
         * @property {supplyChainPackage.ICreateInspecorAccountParams|null} [createInspectorAccount] PayLoad createInspectorAccount
         * @property {supplyChainPackage.ICreateBusinessAgentAccountParams|null} [createBusinessagentAccount] PayLoad createBusinessagentAccount
         * @property {supplyChainPackage.ICreateRetailAgentAccountParams|null} [createRetailagentAccount] PayLoad createRetailagentAccount
         * @property {number|Long|null} [timestamp] PayLoad timestamp
         */

        /**
         * Constructs a new PayLoad.
         * @memberof supplyChainPackage
         * @classdesc Represents a PayLoad.
         * @implements IPayLoad
         * @constructor
         * @param {supplyChainPackage.IPayLoad=} [properties] Properties to set
         */
        function PayLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayLoad action.
         * @member {supplyChainPackage.PayLoad.Action} action
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.action = 0;

        /**
         * PayLoad createLandAccount.
         * @member {supplyChainPackage.ICreateLandAccountParams|null|undefined} createLandAccount
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createLandAccount = null;

        /**
         * PayLoad createFarmerAccount.
         * @member {supplyChainPackage.ICreateFarmerAccountParams|null|undefined} createFarmerAccount
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createFarmerAccount = null;

        /**
         * PayLoad createInspectorAccount.
         * @member {supplyChainPackage.ICreateInspecorAccountParams|null|undefined} createInspectorAccount
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createInspectorAccount = null;

        /**
         * PayLoad createBusinessagentAccount.
         * @member {supplyChainPackage.ICreateBusinessAgentAccountParams|null|undefined} createBusinessagentAccount
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createBusinessagentAccount = null;

        /**
         * PayLoad createRetailagentAccount.
         * @member {supplyChainPackage.ICreateRetailAgentAccountParams|null|undefined} createRetailagentAccount
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createRetailagentAccount = null;

        /**
         * PayLoad timestamp.
         * @member {number|Long} timestamp
         * @memberof supplyChainPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PayLoad instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad=} [properties] Properties to set
         * @returns {supplyChainPackage.PayLoad} PayLoad instance
         */
        PayLoad.create = function create(properties) {
            return new PayLoad(properties);
        };

        /**
         * Encodes the specified PayLoad message. Does not implicitly {@link supplyChainPackage.PayLoad.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.createLandAccount != null && message.hasOwnProperty("createLandAccount"))
                $root.supplyChainPackage.CreateLandAccountParams.encode(message.createLandAccount, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.createFarmerAccount != null && message.hasOwnProperty("createFarmerAccount"))
                $root.supplyChainPackage.CreateFarmerAccountParams.encode(message.createFarmerAccount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createInspectorAccount != null && message.hasOwnProperty("createInspectorAccount"))
                $root.supplyChainPackage.CreateInspecorAccountParams.encode(message.createInspectorAccount, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.createBusinessagentAccount != null && message.hasOwnProperty("createBusinessagentAccount"))
                $root.supplyChainPackage.CreateBusinessAgentAccountParams.encode(message.createBusinessagentAccount, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.createRetailagentAccount != null && message.hasOwnProperty("createRetailagentAccount"))
                $root.supplyChainPackage.CreateRetailAgentAccountParams.encode(message.createRetailagentAccount, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified PayLoad message, length delimited. Does not implicitly {@link supplyChainPackage.PayLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayLoad message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.PayLoad} PayLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.PayLoad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.createLandAccount = $root.supplyChainPackage.CreateLandAccountParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.createFarmerAccount = $root.supplyChainPackage.CreateFarmerAccountParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createInspectorAccount = $root.supplyChainPackage.CreateInspecorAccountParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createBusinessagentAccount = $root.supplyChainPackage.CreateBusinessAgentAccountParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.createRetailagentAccount = $root.supplyChainPackage.CreateRetailAgentAccountParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PayLoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.PayLoad} PayLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayLoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayLoad message.
         * @function verify
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayLoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.createLandAccount != null && message.hasOwnProperty("createLandAccount")) {
                var error = $root.supplyChainPackage.CreateLandAccountParams.verify(message.createLandAccount);
                if (error)
                    return "createLandAccount." + error;
            }
            if (message.createFarmerAccount != null && message.hasOwnProperty("createFarmerAccount")) {
                var error = $root.supplyChainPackage.CreateFarmerAccountParams.verify(message.createFarmerAccount);
                if (error)
                    return "createFarmerAccount." + error;
            }
            if (message.createInspectorAccount != null && message.hasOwnProperty("createInspectorAccount")) {
                var error = $root.supplyChainPackage.CreateInspecorAccountParams.verify(message.createInspectorAccount);
                if (error)
                    return "createInspectorAccount." + error;
            }
            if (message.createBusinessagentAccount != null && message.hasOwnProperty("createBusinessagentAccount")) {
                var error = $root.supplyChainPackage.CreateBusinessAgentAccountParams.verify(message.createBusinessagentAccount);
                if (error)
                    return "createBusinessagentAccount." + error;
            }
            if (message.createRetailagentAccount != null && message.hasOwnProperty("createRetailagentAccount")) {
                var error = $root.supplyChainPackage.CreateRetailAgentAccountParams.verify(message.createRetailagentAccount);
                if (error)
                    return "createRetailagentAccount." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a PayLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.PayLoad} PayLoad
         */
        PayLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.PayLoad)
                return object;
            var message = new $root.supplyChainPackage.PayLoad();
            switch (object.action) {
            case "CREATE_LAND_ACCOUNT":
            case 0:
                message.action = 0;
                break;
            case "CREATE_FARMER_ACCOUNT":
            case 1:
                message.action = 1;
                break;
            case "CREATE_INSPECTOR_ACCOUNT":
            case 2:
                message.action = 2;
                break;
            case "CREATE_BUSINESSAGENT_ACCOUNT":
            case 3:
                message.action = 3;
                break;
            case "CREATE_RETAILAGENT_ACCOUNT":
            case 4:
                message.action = 4;
                break;
            case "GET_ALL_LAND":
            case 5:
                message.action = 5;
                break;
            }
            if (object.createLandAccount != null) {
                if (typeof object.createLandAccount !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createLandAccount: object expected");
                message.createLandAccount = $root.supplyChainPackage.CreateLandAccountParams.fromObject(object.createLandAccount);
            }
            if (object.createFarmerAccount != null) {
                if (typeof object.createFarmerAccount !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createFarmerAccount: object expected");
                message.createFarmerAccount = $root.supplyChainPackage.CreateFarmerAccountParams.fromObject(object.createFarmerAccount);
            }
            if (object.createInspectorAccount != null) {
                if (typeof object.createInspectorAccount !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createInspectorAccount: object expected");
                message.createInspectorAccount = $root.supplyChainPackage.CreateInspecorAccountParams.fromObject(object.createInspectorAccount);
            }
            if (object.createBusinessagentAccount != null) {
                if (typeof object.createBusinessagentAccount !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createBusinessagentAccount: object expected");
                message.createBusinessagentAccount = $root.supplyChainPackage.CreateBusinessAgentAccountParams.fromObject(object.createBusinessagentAccount);
            }
            if (object.createRetailagentAccount != null) {
                if (typeof object.createRetailagentAccount !== "object")
                    throw TypeError(".supplyChainPackage.PayLoad.createRetailagentAccount: object expected");
                message.createRetailagentAccount = $root.supplyChainPackage.CreateRetailAgentAccountParams.fromObject(object.createRetailagentAccount);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PayLoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.PayLoad
         * @static
         * @param {supplyChainPackage.PayLoad} message PayLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "CREATE_LAND_ACCOUNT" : 0;
                object.createLandAccount = null;
                object.createFarmerAccount = null;
                object.createInspectorAccount = null;
                object.createBusinessagentAccount = null;
                object.createRetailagentAccount = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.supplyChainPackage.PayLoad.Action[message.action] : message.action;
            if (message.createLandAccount != null && message.hasOwnProperty("createLandAccount"))
                object.createLandAccount = $root.supplyChainPackage.CreateLandAccountParams.toObject(message.createLandAccount, options);
            if (message.createFarmerAccount != null && message.hasOwnProperty("createFarmerAccount"))
                object.createFarmerAccount = $root.supplyChainPackage.CreateFarmerAccountParams.toObject(message.createFarmerAccount, options);
            if (message.createInspectorAccount != null && message.hasOwnProperty("createInspectorAccount"))
                object.createInspectorAccount = $root.supplyChainPackage.CreateInspecorAccountParams.toObject(message.createInspectorAccount, options);
            if (message.createBusinessagentAccount != null && message.hasOwnProperty("createBusinessagentAccount"))
                object.createBusinessagentAccount = $root.supplyChainPackage.CreateBusinessAgentAccountParams.toObject(message.createBusinessagentAccount, options);
            if (message.createRetailagentAccount != null && message.hasOwnProperty("createRetailagentAccount"))
                object.createRetailagentAccount = $root.supplyChainPackage.CreateRetailAgentAccountParams.toObject(message.createRetailagentAccount, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this PayLoad to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.PayLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Action enum.
         * @name supplyChainPackage.PayLoad.Action
         * @enum {string}
         * @property {number} CREATE_LAND_ACCOUNT=0 CREATE_LAND_ACCOUNT value
         * @property {number} CREATE_FARMER_ACCOUNT=1 CREATE_FARMER_ACCOUNT value
         * @property {number} CREATE_INSPECTOR_ACCOUNT=2 CREATE_INSPECTOR_ACCOUNT value
         * @property {number} CREATE_BUSINESSAGENT_ACCOUNT=3 CREATE_BUSINESSAGENT_ACCOUNT value
         * @property {number} CREATE_RETAILAGENT_ACCOUNT=4 CREATE_RETAILAGENT_ACCOUNT value
         * @property {number} GET_ALL_LAND=5 GET_ALL_LAND value
         */
        PayLoad.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATE_LAND_ACCOUNT"] = 0;
            values[valuesById[1] = "CREATE_FARMER_ACCOUNT"] = 1;
            values[valuesById[2] = "CREATE_INSPECTOR_ACCOUNT"] = 2;
            values[valuesById[3] = "CREATE_BUSINESSAGENT_ACCOUNT"] = 3;
            values[valuesById[4] = "CREATE_RETAILAGENT_ACCOUNT"] = 4;
            values[valuesById[5] = "GET_ALL_LAND"] = 5;
            return values;
        })();

        return PayLoad;
    })();

    supplyChainPackage.CreateLandAccountParams = (function() {

        /**
         * Properties of a CreateLandAccountParams.
         * @memberof supplyChainPackage
         * @interface ICreateLandAccountParams
         * @property {number|null} [landId] CreateLandAccountParams landId
         * @property {string|null} [landName] CreateLandAccountParams landName
         */

        /**
         * Constructs a new CreateLandAccountParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreateLandAccountParams.
         * @implements ICreateLandAccountParams
         * @constructor
         * @param {supplyChainPackage.ICreateLandAccountParams=} [properties] Properties to set
         */
        function CreateLandAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateLandAccountParams landId.
         * @member {number} landId
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @instance
         */
        CreateLandAccountParams.prototype.landId = 0;

        /**
         * CreateLandAccountParams landName.
         * @member {string} landName
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @instance
         */
        CreateLandAccountParams.prototype.landName = "";

        /**
         * Creates a new CreateLandAccountParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {supplyChainPackage.ICreateLandAccountParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreateLandAccountParams} CreateLandAccountParams instance
         */
        CreateLandAccountParams.create = function create(properties) {
            return new CreateLandAccountParams(properties);
        };

        /**
         * Encodes the specified CreateLandAccountParams message. Does not implicitly {@link supplyChainPackage.CreateLandAccountParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {supplyChainPackage.ICreateLandAccountParams} message CreateLandAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLandAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.landId != null && message.hasOwnProperty("landId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.landId);
            if (message.landName != null && message.hasOwnProperty("landName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.landName);
            return writer;
        };

        /**
         * Encodes the specified CreateLandAccountParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreateLandAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {supplyChainPackage.ICreateLandAccountParams} message CreateLandAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLandAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateLandAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreateLandAccountParams} CreateLandAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLandAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreateLandAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.landId = reader.int32();
                    break;
                case 2:
                    message.landName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateLandAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreateLandAccountParams} CreateLandAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLandAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLandAccountParams message.
         * @function verify
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLandAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.landId != null && message.hasOwnProperty("landId"))
                if (!$util.isInteger(message.landId))
                    return "landId: integer expected";
            if (message.landName != null && message.hasOwnProperty("landName"))
                if (!$util.isString(message.landName))
                    return "landName: string expected";
            return null;
        };

        /**
         * Creates a CreateLandAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreateLandAccountParams} CreateLandAccountParams
         */
        CreateLandAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreateLandAccountParams)
                return object;
            var message = new $root.supplyChainPackage.CreateLandAccountParams();
            if (object.landId != null)
                message.landId = object.landId | 0;
            if (object.landName != null)
                message.landName = String(object.landName);
            return message;
        };

        /**
         * Creates a plain object from a CreateLandAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @static
         * @param {supplyChainPackage.CreateLandAccountParams} message CreateLandAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLandAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.landId = 0;
                object.landName = "";
            }
            if (message.landId != null && message.hasOwnProperty("landId"))
                object.landId = message.landId;
            if (message.landName != null && message.hasOwnProperty("landName"))
                object.landName = message.landName;
            return object;
        };

        /**
         * Converts this CreateLandAccountParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreateLandAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLandAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateLandAccountParams;
    })();

    supplyChainPackage.CreateFarmerAccountParams = (function() {

        /**
         * Properties of a CreateFarmerAccountParams.
         * @memberof supplyChainPackage
         * @interface ICreateFarmerAccountParams
         * @property {number|null} [farmerId] CreateFarmerAccountParams farmerId
         * @property {string|null} [farmerName] CreateFarmerAccountParams farmerName
         */

        /**
         * Constructs a new CreateFarmerAccountParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreateFarmerAccountParams.
         * @implements ICreateFarmerAccountParams
         * @constructor
         * @param {supplyChainPackage.ICreateFarmerAccountParams=} [properties] Properties to set
         */
        function CreateFarmerAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateFarmerAccountParams farmerId.
         * @member {number} farmerId
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @instance
         */
        CreateFarmerAccountParams.prototype.farmerId = 0;

        /**
         * CreateFarmerAccountParams farmerName.
         * @member {string} farmerName
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @instance
         */
        CreateFarmerAccountParams.prototype.farmerName = "";

        /**
         * Creates a new CreateFarmerAccountParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {supplyChainPackage.ICreateFarmerAccountParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreateFarmerAccountParams} CreateFarmerAccountParams instance
         */
        CreateFarmerAccountParams.create = function create(properties) {
            return new CreateFarmerAccountParams(properties);
        };

        /**
         * Encodes the specified CreateFarmerAccountParams message. Does not implicitly {@link supplyChainPackage.CreateFarmerAccountParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {supplyChainPackage.ICreateFarmerAccountParams} message CreateFarmerAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateFarmerAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.farmerId != null && message.hasOwnProperty("farmerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.farmerId);
            if (message.farmerName != null && message.hasOwnProperty("farmerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.farmerName);
            return writer;
        };

        /**
         * Encodes the specified CreateFarmerAccountParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreateFarmerAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {supplyChainPackage.ICreateFarmerAccountParams} message CreateFarmerAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateFarmerAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateFarmerAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreateFarmerAccountParams} CreateFarmerAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateFarmerAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreateFarmerAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.farmerId = reader.int32();
                    break;
                case 2:
                    message.farmerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateFarmerAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreateFarmerAccountParams} CreateFarmerAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateFarmerAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateFarmerAccountParams message.
         * @function verify
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateFarmerAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.farmerId != null && message.hasOwnProperty("farmerId"))
                if (!$util.isInteger(message.farmerId))
                    return "farmerId: integer expected";
            if (message.farmerName != null && message.hasOwnProperty("farmerName"))
                if (!$util.isString(message.farmerName))
                    return "farmerName: string expected";
            return null;
        };

        /**
         * Creates a CreateFarmerAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreateFarmerAccountParams} CreateFarmerAccountParams
         */
        CreateFarmerAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreateFarmerAccountParams)
                return object;
            var message = new $root.supplyChainPackage.CreateFarmerAccountParams();
            if (object.farmerId != null)
                message.farmerId = object.farmerId | 0;
            if (object.farmerName != null)
                message.farmerName = String(object.farmerName);
            return message;
        };

        /**
         * Creates a plain object from a CreateFarmerAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @static
         * @param {supplyChainPackage.CreateFarmerAccountParams} message CreateFarmerAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateFarmerAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.farmerId = 0;
                object.farmerName = "";
            }
            if (message.farmerId != null && message.hasOwnProperty("farmerId"))
                object.farmerId = message.farmerId;
            if (message.farmerName != null && message.hasOwnProperty("farmerName"))
                object.farmerName = message.farmerName;
            return object;
        };

        /**
         * Converts this CreateFarmerAccountParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreateFarmerAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateFarmerAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateFarmerAccountParams;
    })();

    supplyChainPackage.CreateInspecorAccountParams = (function() {

        /**
         * Properties of a CreateInspecorAccountParams.
         * @memberof supplyChainPackage
         * @interface ICreateInspecorAccountParams
         * @property {number|null} [inspectorId] CreateInspecorAccountParams inspectorId
         * @property {string|null} [inspectorName] CreateInspecorAccountParams inspectorName
         */

        /**
         * Constructs a new CreateInspecorAccountParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreateInspecorAccountParams.
         * @implements ICreateInspecorAccountParams
         * @constructor
         * @param {supplyChainPackage.ICreateInspecorAccountParams=} [properties] Properties to set
         */
        function CreateInspecorAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateInspecorAccountParams inspectorId.
         * @member {number} inspectorId
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @instance
         */
        CreateInspecorAccountParams.prototype.inspectorId = 0;

        /**
         * CreateInspecorAccountParams inspectorName.
         * @member {string} inspectorName
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @instance
         */
        CreateInspecorAccountParams.prototype.inspectorName = "";

        /**
         * Creates a new CreateInspecorAccountParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {supplyChainPackage.ICreateInspecorAccountParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreateInspecorAccountParams} CreateInspecorAccountParams instance
         */
        CreateInspecorAccountParams.create = function create(properties) {
            return new CreateInspecorAccountParams(properties);
        };

        /**
         * Encodes the specified CreateInspecorAccountParams message. Does not implicitly {@link supplyChainPackage.CreateInspecorAccountParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {supplyChainPackage.ICreateInspecorAccountParams} message CreateInspecorAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateInspecorAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inspectorId != null && message.hasOwnProperty("inspectorId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inspectorId);
            if (message.inspectorName != null && message.hasOwnProperty("inspectorName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inspectorName);
            return writer;
        };

        /**
         * Encodes the specified CreateInspecorAccountParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreateInspecorAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {supplyChainPackage.ICreateInspecorAccountParams} message CreateInspecorAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateInspecorAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateInspecorAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreateInspecorAccountParams} CreateInspecorAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateInspecorAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreateInspecorAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inspectorId = reader.int32();
                    break;
                case 2:
                    message.inspectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateInspecorAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreateInspecorAccountParams} CreateInspecorAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateInspecorAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateInspecorAccountParams message.
         * @function verify
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateInspecorAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inspectorId != null && message.hasOwnProperty("inspectorId"))
                if (!$util.isInteger(message.inspectorId))
                    return "inspectorId: integer expected";
            if (message.inspectorName != null && message.hasOwnProperty("inspectorName"))
                if (!$util.isString(message.inspectorName))
                    return "inspectorName: string expected";
            return null;
        };

        /**
         * Creates a CreateInspecorAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreateInspecorAccountParams} CreateInspecorAccountParams
         */
        CreateInspecorAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreateInspecorAccountParams)
                return object;
            var message = new $root.supplyChainPackage.CreateInspecorAccountParams();
            if (object.inspectorId != null)
                message.inspectorId = object.inspectorId | 0;
            if (object.inspectorName != null)
                message.inspectorName = String(object.inspectorName);
            return message;
        };

        /**
         * Creates a plain object from a CreateInspecorAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @static
         * @param {supplyChainPackage.CreateInspecorAccountParams} message CreateInspecorAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateInspecorAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inspectorId = 0;
                object.inspectorName = "";
            }
            if (message.inspectorId != null && message.hasOwnProperty("inspectorId"))
                object.inspectorId = message.inspectorId;
            if (message.inspectorName != null && message.hasOwnProperty("inspectorName"))
                object.inspectorName = message.inspectorName;
            return object;
        };

        /**
         * Converts this CreateInspecorAccountParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreateInspecorAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateInspecorAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateInspecorAccountParams;
    })();

    supplyChainPackage.CreateBusinessAgentAccountParams = (function() {

        /**
         * Properties of a CreateBusinessAgentAccountParams.
         * @memberof supplyChainPackage
         * @interface ICreateBusinessAgentAccountParams
         * @property {number|null} [businessagentId] CreateBusinessAgentAccountParams businessagentId
         * @property {string|null} [businessagentName] CreateBusinessAgentAccountParams businessagentName
         */

        /**
         * Constructs a new CreateBusinessAgentAccountParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreateBusinessAgentAccountParams.
         * @implements ICreateBusinessAgentAccountParams
         * @constructor
         * @param {supplyChainPackage.ICreateBusinessAgentAccountParams=} [properties] Properties to set
         */
        function CreateBusinessAgentAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateBusinessAgentAccountParams businessagentId.
         * @member {number} businessagentId
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @instance
         */
        CreateBusinessAgentAccountParams.prototype.businessagentId = 0;

        /**
         * CreateBusinessAgentAccountParams businessagentName.
         * @member {string} businessagentName
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @instance
         */
        CreateBusinessAgentAccountParams.prototype.businessagentName = "";

        /**
         * Creates a new CreateBusinessAgentAccountParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateBusinessAgentAccountParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreateBusinessAgentAccountParams} CreateBusinessAgentAccountParams instance
         */
        CreateBusinessAgentAccountParams.create = function create(properties) {
            return new CreateBusinessAgentAccountParams(properties);
        };

        /**
         * Encodes the specified CreateBusinessAgentAccountParams message. Does not implicitly {@link supplyChainPackage.CreateBusinessAgentAccountParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateBusinessAgentAccountParams} message CreateBusinessAgentAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBusinessAgentAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.businessagentId != null && message.hasOwnProperty("businessagentId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.businessagentId);
            if (message.businessagentName != null && message.hasOwnProperty("businessagentName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.businessagentName);
            return writer;
        };

        /**
         * Encodes the specified CreateBusinessAgentAccountParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreateBusinessAgentAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateBusinessAgentAccountParams} message CreateBusinessAgentAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBusinessAgentAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBusinessAgentAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreateBusinessAgentAccountParams} CreateBusinessAgentAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBusinessAgentAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreateBusinessAgentAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.businessagentId = reader.int32();
                    break;
                case 2:
                    message.businessagentName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBusinessAgentAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreateBusinessAgentAccountParams} CreateBusinessAgentAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBusinessAgentAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBusinessAgentAccountParams message.
         * @function verify
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBusinessAgentAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.businessagentId != null && message.hasOwnProperty("businessagentId"))
                if (!$util.isInteger(message.businessagentId))
                    return "businessagentId: integer expected";
            if (message.businessagentName != null && message.hasOwnProperty("businessagentName"))
                if (!$util.isString(message.businessagentName))
                    return "businessagentName: string expected";
            return null;
        };

        /**
         * Creates a CreateBusinessAgentAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreateBusinessAgentAccountParams} CreateBusinessAgentAccountParams
         */
        CreateBusinessAgentAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreateBusinessAgentAccountParams)
                return object;
            var message = new $root.supplyChainPackage.CreateBusinessAgentAccountParams();
            if (object.businessagentId != null)
                message.businessagentId = object.businessagentId | 0;
            if (object.businessagentName != null)
                message.businessagentName = String(object.businessagentName);
            return message;
        };

        /**
         * Creates a plain object from a CreateBusinessAgentAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @static
         * @param {supplyChainPackage.CreateBusinessAgentAccountParams} message CreateBusinessAgentAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBusinessAgentAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.businessagentId = 0;
                object.businessagentName = "";
            }
            if (message.businessagentId != null && message.hasOwnProperty("businessagentId"))
                object.businessagentId = message.businessagentId;
            if (message.businessagentName != null && message.hasOwnProperty("businessagentName"))
                object.businessagentName = message.businessagentName;
            return object;
        };

        /**
         * Converts this CreateBusinessAgentAccountParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreateBusinessAgentAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBusinessAgentAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateBusinessAgentAccountParams;
    })();

    supplyChainPackage.CreateRetailAgentAccountParams = (function() {

        /**
         * Properties of a CreateRetailAgentAccountParams.
         * @memberof supplyChainPackage
         * @interface ICreateRetailAgentAccountParams
         * @property {number|null} [retailagentId] CreateRetailAgentAccountParams retailagentId
         * @property {string|null} [retailagentName] CreateRetailAgentAccountParams retailagentName
         */

        /**
         * Constructs a new CreateRetailAgentAccountParams.
         * @memberof supplyChainPackage
         * @classdesc Represents a CreateRetailAgentAccountParams.
         * @implements ICreateRetailAgentAccountParams
         * @constructor
         * @param {supplyChainPackage.ICreateRetailAgentAccountParams=} [properties] Properties to set
         */
        function CreateRetailAgentAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRetailAgentAccountParams retailagentId.
         * @member {number} retailagentId
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @instance
         */
        CreateRetailAgentAccountParams.prototype.retailagentId = 0;

        /**
         * CreateRetailAgentAccountParams retailagentName.
         * @member {string} retailagentName
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @instance
         */
        CreateRetailAgentAccountParams.prototype.retailagentName = "";

        /**
         * Creates a new CreateRetailAgentAccountParams instance using the specified properties.
         * @function create
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateRetailAgentAccountParams=} [properties] Properties to set
         * @returns {supplyChainPackage.CreateRetailAgentAccountParams} CreateRetailAgentAccountParams instance
         */
        CreateRetailAgentAccountParams.create = function create(properties) {
            return new CreateRetailAgentAccountParams(properties);
        };

        /**
         * Encodes the specified CreateRetailAgentAccountParams message. Does not implicitly {@link supplyChainPackage.CreateRetailAgentAccountParams.verify|verify} messages.
         * @function encode
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateRetailAgentAccountParams} message CreateRetailAgentAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRetailAgentAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retailagentId != null && message.hasOwnProperty("retailagentId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retailagentId);
            if (message.retailagentName != null && message.hasOwnProperty("retailagentName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.retailagentName);
            return writer;
        };

        /**
         * Encodes the specified CreateRetailAgentAccountParams message, length delimited. Does not implicitly {@link supplyChainPackage.CreateRetailAgentAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {supplyChainPackage.ICreateRetailAgentAccountParams} message CreateRetailAgentAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRetailAgentAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRetailAgentAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {supplyChainPackage.CreateRetailAgentAccountParams} CreateRetailAgentAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRetailAgentAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.supplyChainPackage.CreateRetailAgentAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retailagentId = reader.int32();
                    break;
                case 2:
                    message.retailagentName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRetailAgentAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {supplyChainPackage.CreateRetailAgentAccountParams} CreateRetailAgentAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRetailAgentAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRetailAgentAccountParams message.
         * @function verify
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRetailAgentAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retailagentId != null && message.hasOwnProperty("retailagentId"))
                if (!$util.isInteger(message.retailagentId))
                    return "retailagentId: integer expected";
            if (message.retailagentName != null && message.hasOwnProperty("retailagentName"))
                if (!$util.isString(message.retailagentName))
                    return "retailagentName: string expected";
            return null;
        };

        /**
         * Creates a CreateRetailAgentAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {supplyChainPackage.CreateRetailAgentAccountParams} CreateRetailAgentAccountParams
         */
        CreateRetailAgentAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.supplyChainPackage.CreateRetailAgentAccountParams)
                return object;
            var message = new $root.supplyChainPackage.CreateRetailAgentAccountParams();
            if (object.retailagentId != null)
                message.retailagentId = object.retailagentId | 0;
            if (object.retailagentName != null)
                message.retailagentName = String(object.retailagentName);
            return message;
        };

        /**
         * Creates a plain object from a CreateRetailAgentAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @static
         * @param {supplyChainPackage.CreateRetailAgentAccountParams} message CreateRetailAgentAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRetailAgentAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retailagentId = 0;
                object.retailagentName = "";
            }
            if (message.retailagentId != null && message.hasOwnProperty("retailagentId"))
                object.retailagentId = message.retailagentId;
            if (message.retailagentName != null && message.hasOwnProperty("retailagentName"))
                object.retailagentName = message.retailagentName;
            return object;
        };

        /**
         * Converts this CreateRetailAgentAccountParams to JSON.
         * @function toJSON
         * @memberof supplyChainPackage.CreateRetailAgentAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRetailAgentAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRetailAgentAccountParams;
    })();

    return supplyChainPackage;
})();

module.exports = $root;
