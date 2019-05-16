/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.structuredBankPackage = (function() {

    /**
     * Namespace structuredBankPackage.
     * @exports structuredBankPackage
     * @namespace
     */
    var structuredBankPackage = {};

    structuredBankPackage.PayLoad = (function() {

        /**
         * Properties of a PayLoad.
         * @memberof structuredBankPackage
         * @interface IPayLoad
         * @property {structuredBankPackage.PayLoad.Action|null} [action] PayLoad action
         * @property {structuredBankPackage.ICreateAccountParams|null} [createAccount] PayLoad createAccount
         * @property {structuredBankPackage.IDepositMoneyParams|null} [depositMoney] PayLoad depositMoney
         * @property {structuredBankPackage.IWithDrawMoneyParams|null} [withdrawMoney] PayLoad withdrawMoney
         * @property {structuredBankPackage.ITransferMoneyParams|null} [transferMoney] PayLoad transferMoney
         * @property {number|Long|null} [timestamp] PayLoad timestamp
         */

        /**
         * Constructs a new PayLoad.
         * @memberof structuredBankPackage
         * @classdesc Represents a PayLoad.
         * @implements IPayLoad
         * @constructor
         * @param {structuredBankPackage.IPayLoad=} [properties] Properties to set
         */
        function PayLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayLoad action.
         * @member {structuredBankPackage.PayLoad.Action} action
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.action = 0;

        /**
         * PayLoad createAccount.
         * @member {structuredBankPackage.ICreateAccountParams|null|undefined} createAccount
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.createAccount = null;

        /**
         * PayLoad depositMoney.
         * @member {structuredBankPackage.IDepositMoneyParams|null|undefined} depositMoney
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.depositMoney = null;

        /**
         * PayLoad withdrawMoney.
         * @member {structuredBankPackage.IWithDrawMoneyParams|null|undefined} withdrawMoney
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.withdrawMoney = null;

        /**
         * PayLoad transferMoney.
         * @member {structuredBankPackage.ITransferMoneyParams|null|undefined} transferMoney
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.transferMoney = null;

        /**
         * PayLoad timestamp.
         * @member {number|Long} timestamp
         * @memberof structuredBankPackage.PayLoad
         * @instance
         */
        PayLoad.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PayLoad instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {structuredBankPackage.IPayLoad=} [properties] Properties to set
         * @returns {structuredBankPackage.PayLoad} PayLoad instance
         */
        PayLoad.create = function create(properties) {
            return new PayLoad(properties);
        };

        /**
         * Encodes the specified PayLoad message. Does not implicitly {@link structuredBankPackage.PayLoad.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {structuredBankPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.createAccount != null && message.hasOwnProperty("createAccount"))
                $root.structuredBankPackage.CreateAccountParams.encode(message.createAccount, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.depositMoney != null && message.hasOwnProperty("depositMoney"))
                $root.structuredBankPackage.DepositMoneyParams.encode(message.depositMoney, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.withdrawMoney != null && message.hasOwnProperty("withdrawMoney"))
                $root.structuredBankPackage.WithDrawMoneyParams.encode(message.withdrawMoney, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.transferMoney != null && message.hasOwnProperty("transferMoney"))
                $root.structuredBankPackage.TransferMoneyParams.encode(message.transferMoney, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified PayLoad message, length delimited. Does not implicitly {@link structuredBankPackage.PayLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {structuredBankPackage.IPayLoad} message PayLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayLoad message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.PayLoad} PayLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.PayLoad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.createAccount = $root.structuredBankPackage.CreateAccountParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositMoney = $root.structuredBankPackage.DepositMoneyParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.withdrawMoney = $root.structuredBankPackage.WithDrawMoneyParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transferMoney = $root.structuredBankPackage.TransferMoneyParams.decode(reader, reader.uint32());
                    break;
                case 6:
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
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.PayLoad} PayLoad
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
         * @memberof structuredBankPackage.PayLoad
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
            if (message.createAccount != null && message.hasOwnProperty("createAccount")) {
                var error = $root.structuredBankPackage.CreateAccountParams.verify(message.createAccount);
                if (error)
                    return "createAccount." + error;
            }
            if (message.depositMoney != null && message.hasOwnProperty("depositMoney")) {
                var error = $root.structuredBankPackage.DepositMoneyParams.verify(message.depositMoney);
                if (error)
                    return "depositMoney." + error;
            }
            if (message.withdrawMoney != null && message.hasOwnProperty("withdrawMoney")) {
                var error = $root.structuredBankPackage.WithDrawMoneyParams.verify(message.withdrawMoney);
                if (error)
                    return "withdrawMoney." + error;
            }
            if (message.transferMoney != null && message.hasOwnProperty("transferMoney")) {
                var error = $root.structuredBankPackage.TransferMoneyParams.verify(message.transferMoney);
                if (error)
                    return "transferMoney." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a PayLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.PayLoad} PayLoad
         */
        PayLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.PayLoad)
                return object;
            var message = new $root.structuredBankPackage.PayLoad();
            switch (object.action) {
            case "CREATE_ACCOUNT":
            case 0:
                message.action = 0;
                break;
            case "DEPOSIT_MONEY":
            case 1:
                message.action = 1;
                break;
            case "WITHDRAW_MONEY":
            case 2:
                message.action = 2;
                break;
            case "TRANSFER_MONEY":
            case 3:
                message.action = 3;
                break;
            case "ISSUE_CHEQUE":
            case 4:
                message.action = 4;
                break;
            case "CLEAR_CHECKING_BALANCE":
            case 5:
                message.action = 5;
                break;
            }
            if (object.createAccount != null) {
                if (typeof object.createAccount !== "object")
                    throw TypeError(".structuredBankPackage.PayLoad.createAccount: object expected");
                message.createAccount = $root.structuredBankPackage.CreateAccountParams.fromObject(object.createAccount);
            }
            if (object.depositMoney != null) {
                if (typeof object.depositMoney !== "object")
                    throw TypeError(".structuredBankPackage.PayLoad.depositMoney: object expected");
                message.depositMoney = $root.structuredBankPackage.DepositMoneyParams.fromObject(object.depositMoney);
            }
            if (object.withdrawMoney != null) {
                if (typeof object.withdrawMoney !== "object")
                    throw TypeError(".structuredBankPackage.PayLoad.withdrawMoney: object expected");
                message.withdrawMoney = $root.structuredBankPackage.WithDrawMoneyParams.fromObject(object.withdrawMoney);
            }
            if (object.transferMoney != null) {
                if (typeof object.transferMoney !== "object")
                    throw TypeError(".structuredBankPackage.PayLoad.transferMoney: object expected");
                message.transferMoney = $root.structuredBankPackage.TransferMoneyParams.fromObject(object.transferMoney);
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
         * @memberof structuredBankPackage.PayLoad
         * @static
         * @param {structuredBankPackage.PayLoad} message PayLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "CREATE_ACCOUNT" : 0;
                object.createAccount = null;
                object.depositMoney = null;
                object.withdrawMoney = null;
                object.transferMoney = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.structuredBankPackage.PayLoad.Action[message.action] : message.action;
            if (message.createAccount != null && message.hasOwnProperty("createAccount"))
                object.createAccount = $root.structuredBankPackage.CreateAccountParams.toObject(message.createAccount, options);
            if (message.depositMoney != null && message.hasOwnProperty("depositMoney"))
                object.depositMoney = $root.structuredBankPackage.DepositMoneyParams.toObject(message.depositMoney, options);
            if (message.withdrawMoney != null && message.hasOwnProperty("withdrawMoney"))
                object.withdrawMoney = $root.structuredBankPackage.WithDrawMoneyParams.toObject(message.withdrawMoney, options);
            if (message.transferMoney != null && message.hasOwnProperty("transferMoney"))
                object.transferMoney = $root.structuredBankPackage.TransferMoneyParams.toObject(message.transferMoney, options);
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
         * @memberof structuredBankPackage.PayLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Action enum.
         * @name structuredBankPackage.PayLoad.Action
         * @enum {string}
         * @property {number} CREATE_ACCOUNT=0 CREATE_ACCOUNT value
         * @property {number} DEPOSIT_MONEY=1 DEPOSIT_MONEY value
         * @property {number} WITHDRAW_MONEY=2 WITHDRAW_MONEY value
         * @property {number} TRANSFER_MONEY=3 TRANSFER_MONEY value
         * @property {number} ISSUE_CHEQUE=4 ISSUE_CHEQUE value
         * @property {number} CLEAR_CHECKING_BALANCE=5 CLEAR_CHECKING_BALANCE value
         */
        PayLoad.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATE_ACCOUNT"] = 0;
            values[valuesById[1] = "DEPOSIT_MONEY"] = 1;
            values[valuesById[2] = "WITHDRAW_MONEY"] = 2;
            values[valuesById[3] = "TRANSFER_MONEY"] = 3;
            values[valuesById[4] = "ISSUE_CHEQUE"] = 4;
            values[valuesById[5] = "CLEAR_CHECKING_BALANCE"] = 5;
            return values;
        })();

        return PayLoad;
    })();

    structuredBankPackage.CreateAccountParams = (function() {

        /**
         * Properties of a CreateAccountParams.
         * @memberof structuredBankPackage
         * @interface ICreateAccountParams
         * @property {number|null} [customerId] CreateAccountParams customerId
         * @property {string|null} [customerName] CreateAccountParams customerName
         * @property {number|null} [savingsBalance] CreateAccountParams savingsBalance
         * @property {number|null} [checkingBalance] CreateAccountParams checkingBalance
         */

        /**
         * Constructs a new CreateAccountParams.
         * @memberof structuredBankPackage
         * @classdesc Represents a CreateAccountParams.
         * @implements ICreateAccountParams
         * @constructor
         * @param {structuredBankPackage.ICreateAccountParams=} [properties] Properties to set
         */
        function CreateAccountParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAccountParams customerId.
         * @member {number} customerId
         * @memberof structuredBankPackage.CreateAccountParams
         * @instance
         */
        CreateAccountParams.prototype.customerId = 0;

        /**
         * CreateAccountParams customerName.
         * @member {string} customerName
         * @memberof structuredBankPackage.CreateAccountParams
         * @instance
         */
        CreateAccountParams.prototype.customerName = "";

        /**
         * CreateAccountParams savingsBalance.
         * @member {number} savingsBalance
         * @memberof structuredBankPackage.CreateAccountParams
         * @instance
         */
        CreateAccountParams.prototype.savingsBalance = 0;

        /**
         * CreateAccountParams checkingBalance.
         * @member {number} checkingBalance
         * @memberof structuredBankPackage.CreateAccountParams
         * @instance
         */
        CreateAccountParams.prototype.checkingBalance = 0;

        /**
         * Creates a new CreateAccountParams instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {structuredBankPackage.ICreateAccountParams=} [properties] Properties to set
         * @returns {structuredBankPackage.CreateAccountParams} CreateAccountParams instance
         */
        CreateAccountParams.create = function create(properties) {
            return new CreateAccountParams(properties);
        };

        /**
         * Encodes the specified CreateAccountParams message. Does not implicitly {@link structuredBankPackage.CreateAccountParams.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {structuredBankPackage.ICreateAccountParams} message CreateAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.customerId);
            if (message.customerName != null && message.hasOwnProperty("customerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.customerName);
            if (message.savingsBalance != null && message.hasOwnProperty("savingsBalance"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.savingsBalance);
            if (message.checkingBalance != null && message.hasOwnProperty("checkingBalance"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.checkingBalance);
            return writer;
        };

        /**
         * Encodes the specified CreateAccountParams message, length delimited. Does not implicitly {@link structuredBankPackage.CreateAccountParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {structuredBankPackage.ICreateAccountParams} message CreateAccountParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAccountParams message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.CreateAccountParams} CreateAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.CreateAccountParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.int32();
                    break;
                case 2:
                    message.customerName = reader.string();
                    break;
                case 3:
                    message.savingsBalance = reader.float();
                    break;
                case 4:
                    message.checkingBalance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAccountParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.CreateAccountParams} CreateAccountParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAccountParams message.
         * @function verify
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAccountParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                if (!$util.isInteger(message.customerId))
                    return "customerId: integer expected";
            if (message.customerName != null && message.hasOwnProperty("customerName"))
                if (!$util.isString(message.customerName))
                    return "customerName: string expected";
            if (message.savingsBalance != null && message.hasOwnProperty("savingsBalance"))
                if (typeof message.savingsBalance !== "number")
                    return "savingsBalance: number expected";
            if (message.checkingBalance != null && message.hasOwnProperty("checkingBalance"))
                if (typeof message.checkingBalance !== "number")
                    return "checkingBalance: number expected";
            return null;
        };

        /**
         * Creates a CreateAccountParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.CreateAccountParams} CreateAccountParams
         */
        CreateAccountParams.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.CreateAccountParams)
                return object;
            var message = new $root.structuredBankPackage.CreateAccountParams();
            if (object.customerId != null)
                message.customerId = object.customerId | 0;
            if (object.customerName != null)
                message.customerName = String(object.customerName);
            if (object.savingsBalance != null)
                message.savingsBalance = Number(object.savingsBalance);
            if (object.checkingBalance != null)
                message.checkingBalance = Number(object.checkingBalance);
            return message;
        };

        /**
         * Creates a plain object from a CreateAccountParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.CreateAccountParams
         * @static
         * @param {structuredBankPackage.CreateAccountParams} message CreateAccountParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAccountParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.customerId = 0;
                object.customerName = "";
                object.savingsBalance = 0;
                object.checkingBalance = 0;
            }
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                object.customerId = message.customerId;
            if (message.customerName != null && message.hasOwnProperty("customerName"))
                object.customerName = message.customerName;
            if (message.savingsBalance != null && message.hasOwnProperty("savingsBalance"))
                object.savingsBalance = options.json && !isFinite(message.savingsBalance) ? String(message.savingsBalance) : message.savingsBalance;
            if (message.checkingBalance != null && message.hasOwnProperty("checkingBalance"))
                object.checkingBalance = options.json && !isFinite(message.checkingBalance) ? String(message.checkingBalance) : message.checkingBalance;
            return object;
        };

        /**
         * Converts this CreateAccountParams to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.CreateAccountParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAccountParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAccountParams;
    })();

    structuredBankPackage.DepositMoneyParams = (function() {

        /**
         * Properties of a DepositMoneyParams.
         * @memberof structuredBankPackage
         * @interface IDepositMoneyParams
         * @property {number|null} [customerId] DepositMoneyParams customerId
         * @property {number|null} [amount] DepositMoneyParams amount
         */

        /**
         * Constructs a new DepositMoneyParams.
         * @memberof structuredBankPackage
         * @classdesc Represents a DepositMoneyParams.
         * @implements IDepositMoneyParams
         * @constructor
         * @param {structuredBankPackage.IDepositMoneyParams=} [properties] Properties to set
         */
        function DepositMoneyParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DepositMoneyParams customerId.
         * @member {number} customerId
         * @memberof structuredBankPackage.DepositMoneyParams
         * @instance
         */
        DepositMoneyParams.prototype.customerId = 0;

        /**
         * DepositMoneyParams amount.
         * @member {number} amount
         * @memberof structuredBankPackage.DepositMoneyParams
         * @instance
         */
        DepositMoneyParams.prototype.amount = 0;

        /**
         * Creates a new DepositMoneyParams instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {structuredBankPackage.IDepositMoneyParams=} [properties] Properties to set
         * @returns {structuredBankPackage.DepositMoneyParams} DepositMoneyParams instance
         */
        DepositMoneyParams.create = function create(properties) {
            return new DepositMoneyParams(properties);
        };

        /**
         * Encodes the specified DepositMoneyParams message. Does not implicitly {@link structuredBankPackage.DepositMoneyParams.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {structuredBankPackage.IDepositMoneyParams} message DepositMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositMoneyParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.customerId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified DepositMoneyParams message, length delimited. Does not implicitly {@link structuredBankPackage.DepositMoneyParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {structuredBankPackage.IDepositMoneyParams} message DepositMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositMoneyParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DepositMoneyParams message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.DepositMoneyParams} DepositMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositMoneyParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.DepositMoneyParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.int32();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DepositMoneyParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.DepositMoneyParams} DepositMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositMoneyParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DepositMoneyParams message.
         * @function verify
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepositMoneyParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                if (!$util.isInteger(message.customerId))
                    return "customerId: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a DepositMoneyParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.DepositMoneyParams} DepositMoneyParams
         */
        DepositMoneyParams.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.DepositMoneyParams)
                return object;
            var message = new $root.structuredBankPackage.DepositMoneyParams();
            if (object.customerId != null)
                message.customerId = object.customerId | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a DepositMoneyParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.DepositMoneyParams
         * @static
         * @param {structuredBankPackage.DepositMoneyParams} message DepositMoneyParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepositMoneyParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.customerId = 0;
                object.amount = 0;
            }
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                object.customerId = message.customerId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this DepositMoneyParams to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.DepositMoneyParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepositMoneyParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DepositMoneyParams;
    })();

    structuredBankPackage.WithDrawMoneyParams = (function() {

        /**
         * Properties of a WithDrawMoneyParams.
         * @memberof structuredBankPackage
         * @interface IWithDrawMoneyParams
         * @property {number|null} [customerId] WithDrawMoneyParams customerId
         * @property {number|null} [amount] WithDrawMoneyParams amount
         */

        /**
         * Constructs a new WithDrawMoneyParams.
         * @memberof structuredBankPackage
         * @classdesc Represents a WithDrawMoneyParams.
         * @implements IWithDrawMoneyParams
         * @constructor
         * @param {structuredBankPackage.IWithDrawMoneyParams=} [properties] Properties to set
         */
        function WithDrawMoneyParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WithDrawMoneyParams customerId.
         * @member {number} customerId
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @instance
         */
        WithDrawMoneyParams.prototype.customerId = 0;

        /**
         * WithDrawMoneyParams amount.
         * @member {number} amount
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @instance
         */
        WithDrawMoneyParams.prototype.amount = 0;

        /**
         * Creates a new WithDrawMoneyParams instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {structuredBankPackage.IWithDrawMoneyParams=} [properties] Properties to set
         * @returns {structuredBankPackage.WithDrawMoneyParams} WithDrawMoneyParams instance
         */
        WithDrawMoneyParams.create = function create(properties) {
            return new WithDrawMoneyParams(properties);
        };

        /**
         * Encodes the specified WithDrawMoneyParams message. Does not implicitly {@link structuredBankPackage.WithDrawMoneyParams.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {structuredBankPackage.IWithDrawMoneyParams} message WithDrawMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithDrawMoneyParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.customerId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified WithDrawMoneyParams message, length delimited. Does not implicitly {@link structuredBankPackage.WithDrawMoneyParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {structuredBankPackage.IWithDrawMoneyParams} message WithDrawMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithDrawMoneyParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WithDrawMoneyParams message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.WithDrawMoneyParams} WithDrawMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithDrawMoneyParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.WithDrawMoneyParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.int32();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WithDrawMoneyParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.WithDrawMoneyParams} WithDrawMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithDrawMoneyParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WithDrawMoneyParams message.
         * @function verify
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WithDrawMoneyParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                if (!$util.isInteger(message.customerId))
                    return "customerId: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a WithDrawMoneyParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.WithDrawMoneyParams} WithDrawMoneyParams
         */
        WithDrawMoneyParams.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.WithDrawMoneyParams)
                return object;
            var message = new $root.structuredBankPackage.WithDrawMoneyParams();
            if (object.customerId != null)
                message.customerId = object.customerId | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a WithDrawMoneyParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @static
         * @param {structuredBankPackage.WithDrawMoneyParams} message WithDrawMoneyParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WithDrawMoneyParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.customerId = 0;
                object.amount = 0;
            }
            if (message.customerId != null && message.hasOwnProperty("customerId"))
                object.customerId = message.customerId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this WithDrawMoneyParams to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.WithDrawMoneyParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WithDrawMoneyParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WithDrawMoneyParams;
    })();

    structuredBankPackage.TransferMoneyParams = (function() {

        /**
         * Properties of a TransferMoneyParams.
         * @memberof structuredBankPackage
         * @interface ITransferMoneyParams
         * @property {number|null} [sourceCustomerId] TransferMoneyParams sourceCustomerId
         * @property {number|null} [destCustomerId] TransferMoneyParams destCustomerId
         * @property {number|null} [amount] TransferMoneyParams amount
         */

        /**
         * Constructs a new TransferMoneyParams.
         * @memberof structuredBankPackage
         * @classdesc Represents a TransferMoneyParams.
         * @implements ITransferMoneyParams
         * @constructor
         * @param {structuredBankPackage.ITransferMoneyParams=} [properties] Properties to set
         */
        function TransferMoneyParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransferMoneyParams sourceCustomerId.
         * @member {number} sourceCustomerId
         * @memberof structuredBankPackage.TransferMoneyParams
         * @instance
         */
        TransferMoneyParams.prototype.sourceCustomerId = 0;

        /**
         * TransferMoneyParams destCustomerId.
         * @member {number} destCustomerId
         * @memberof structuredBankPackage.TransferMoneyParams
         * @instance
         */
        TransferMoneyParams.prototype.destCustomerId = 0;

        /**
         * TransferMoneyParams amount.
         * @member {number} amount
         * @memberof structuredBankPackage.TransferMoneyParams
         * @instance
         */
        TransferMoneyParams.prototype.amount = 0;

        /**
         * Creates a new TransferMoneyParams instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {structuredBankPackage.ITransferMoneyParams=} [properties] Properties to set
         * @returns {structuredBankPackage.TransferMoneyParams} TransferMoneyParams instance
         */
        TransferMoneyParams.create = function create(properties) {
            return new TransferMoneyParams(properties);
        };

        /**
         * Encodes the specified TransferMoneyParams message. Does not implicitly {@link structuredBankPackage.TransferMoneyParams.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {structuredBankPackage.ITransferMoneyParams} message TransferMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferMoneyParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceCustomerId);
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.destCustomerId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified TransferMoneyParams message, length delimited. Does not implicitly {@link structuredBankPackage.TransferMoneyParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {structuredBankPackage.ITransferMoneyParams} message TransferMoneyParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferMoneyParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferMoneyParams message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.TransferMoneyParams} TransferMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferMoneyParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.TransferMoneyParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sourceCustomerId = reader.int32();
                    break;
                case 2:
                    message.destCustomerId = reader.int32();
                    break;
                case 3:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransferMoneyParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.TransferMoneyParams} TransferMoneyParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferMoneyParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferMoneyParams message.
         * @function verify
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferMoneyParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                if (!$util.isInteger(message.sourceCustomerId))
                    return "sourceCustomerId: integer expected";
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                if (!$util.isInteger(message.destCustomerId))
                    return "destCustomerId: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a TransferMoneyParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.TransferMoneyParams} TransferMoneyParams
         */
        TransferMoneyParams.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.TransferMoneyParams)
                return object;
            var message = new $root.structuredBankPackage.TransferMoneyParams();
            if (object.sourceCustomerId != null)
                message.sourceCustomerId = object.sourceCustomerId | 0;
            if (object.destCustomerId != null)
                message.destCustomerId = object.destCustomerId | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a TransferMoneyParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.TransferMoneyParams
         * @static
         * @param {structuredBankPackage.TransferMoneyParams} message TransferMoneyParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferMoneyParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceCustomerId = 0;
                object.destCustomerId = 0;
                object.amount = 0;
            }
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                object.sourceCustomerId = message.sourceCustomerId;
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                object.destCustomerId = message.destCustomerId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this TransferMoneyParams to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.TransferMoneyParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferMoneyParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransferMoneyParams;
    })();

    structuredBankPackage.issue_cheque = (function() {

        /**
         * Properties of an issue_cheque.
         * @memberof structuredBankPackage
         * @interface Iissue_cheque
         * @property {number|null} [sourceCustomerId] issue_cheque sourceCustomerId
         * @property {number|null} [destCustomerId] issue_cheque destCustomerId
         * @property {number|null} [amount] issue_cheque amount
         */

        /**
         * Constructs a new issue_cheque.
         * @memberof structuredBankPackage
         * @classdesc Represents an issue_cheque.
         * @implements Iissue_cheque
         * @constructor
         * @param {structuredBankPackage.Iissue_cheque=} [properties] Properties to set
         */
        function issue_cheque(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * issue_cheque sourceCustomerId.
         * @member {number} sourceCustomerId
         * @memberof structuredBankPackage.issue_cheque
         * @instance
         */
        issue_cheque.prototype.sourceCustomerId = 0;

        /**
         * issue_cheque destCustomerId.
         * @member {number} destCustomerId
         * @memberof structuredBankPackage.issue_cheque
         * @instance
         */
        issue_cheque.prototype.destCustomerId = 0;

        /**
         * issue_cheque amount.
         * @member {number} amount
         * @memberof structuredBankPackage.issue_cheque
         * @instance
         */
        issue_cheque.prototype.amount = 0;

        /**
         * Creates a new issue_cheque instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {structuredBankPackage.Iissue_cheque=} [properties] Properties to set
         * @returns {structuredBankPackage.issue_cheque} issue_cheque instance
         */
        issue_cheque.create = function create(properties) {
            return new issue_cheque(properties);
        };

        /**
         * Encodes the specified issue_cheque message. Does not implicitly {@link structuredBankPackage.issue_cheque.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {structuredBankPackage.Iissue_cheque} message issue_cheque message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        issue_cheque.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceCustomerId);
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.destCustomerId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified issue_cheque message, length delimited. Does not implicitly {@link structuredBankPackage.issue_cheque.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {structuredBankPackage.Iissue_cheque} message issue_cheque message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        issue_cheque.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an issue_cheque message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.issue_cheque} issue_cheque
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        issue_cheque.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.issue_cheque();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sourceCustomerId = reader.int32();
                    break;
                case 2:
                    message.destCustomerId = reader.int32();
                    break;
                case 3:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an issue_cheque message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.issue_cheque} issue_cheque
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        issue_cheque.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an issue_cheque message.
         * @function verify
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        issue_cheque.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                if (!$util.isInteger(message.sourceCustomerId))
                    return "sourceCustomerId: integer expected";
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                if (!$util.isInteger(message.destCustomerId))
                    return "destCustomerId: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates an issue_cheque message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.issue_cheque} issue_cheque
         */
        issue_cheque.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.issue_cheque)
                return object;
            var message = new $root.structuredBankPackage.issue_cheque();
            if (object.sourceCustomerId != null)
                message.sourceCustomerId = object.sourceCustomerId | 0;
            if (object.destCustomerId != null)
                message.destCustomerId = object.destCustomerId | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from an issue_cheque message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.issue_cheque
         * @static
         * @param {structuredBankPackage.issue_cheque} message issue_cheque
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        issue_cheque.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceCustomerId = 0;
                object.destCustomerId = 0;
                object.amount = 0;
            }
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                object.sourceCustomerId = message.sourceCustomerId;
            if (message.destCustomerId != null && message.hasOwnProperty("destCustomerId"))
                object.destCustomerId = message.destCustomerId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this issue_cheque to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.issue_cheque
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        issue_cheque.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return issue_cheque;
    })();

    structuredBankPackage.clear_checking_balance = (function() {

        /**
         * Properties of a clear_checking_balance.
         * @memberof structuredBankPackage
         * @interface Iclear_checking_balance
         * @property {number|null} [sourceCustomerId] clear_checking_balance sourceCustomerId
         * @property {number|null} [amount] clear_checking_balance amount
         */

        /**
         * Constructs a new clear_checking_balance.
         * @memberof structuredBankPackage
         * @classdesc Represents a clear_checking_balance.
         * @implements Iclear_checking_balance
         * @constructor
         * @param {structuredBankPackage.Iclear_checking_balance=} [properties] Properties to set
         */
        function clear_checking_balance(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * clear_checking_balance sourceCustomerId.
         * @member {number} sourceCustomerId
         * @memberof structuredBankPackage.clear_checking_balance
         * @instance
         */
        clear_checking_balance.prototype.sourceCustomerId = 0;

        /**
         * clear_checking_balance amount.
         * @member {number} amount
         * @memberof structuredBankPackage.clear_checking_balance
         * @instance
         */
        clear_checking_balance.prototype.amount = 0;

        /**
         * Creates a new clear_checking_balance instance using the specified properties.
         * @function create
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {structuredBankPackage.Iclear_checking_balance=} [properties] Properties to set
         * @returns {structuredBankPackage.clear_checking_balance} clear_checking_balance instance
         */
        clear_checking_balance.create = function create(properties) {
            return new clear_checking_balance(properties);
        };

        /**
         * Encodes the specified clear_checking_balance message. Does not implicitly {@link structuredBankPackage.clear_checking_balance.verify|verify} messages.
         * @function encode
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {structuredBankPackage.Iclear_checking_balance} message clear_checking_balance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        clear_checking_balance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceCustomerId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified clear_checking_balance message, length delimited. Does not implicitly {@link structuredBankPackage.clear_checking_balance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {structuredBankPackage.Iclear_checking_balance} message clear_checking_balance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        clear_checking_balance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a clear_checking_balance message from the specified reader or buffer.
         * @function decode
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structuredBankPackage.clear_checking_balance} clear_checking_balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        clear_checking_balance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structuredBankPackage.clear_checking_balance();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sourceCustomerId = reader.int32();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a clear_checking_balance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structuredBankPackage.clear_checking_balance} clear_checking_balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        clear_checking_balance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a clear_checking_balance message.
         * @function verify
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        clear_checking_balance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                if (!$util.isInteger(message.sourceCustomerId))
                    return "sourceCustomerId: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a clear_checking_balance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structuredBankPackage.clear_checking_balance} clear_checking_balance
         */
        clear_checking_balance.fromObject = function fromObject(object) {
            if (object instanceof $root.structuredBankPackage.clear_checking_balance)
                return object;
            var message = new $root.structuredBankPackage.clear_checking_balance();
            if (object.sourceCustomerId != null)
                message.sourceCustomerId = object.sourceCustomerId | 0;
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a clear_checking_balance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structuredBankPackage.clear_checking_balance
         * @static
         * @param {structuredBankPackage.clear_checking_balance} message clear_checking_balance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        clear_checking_balance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceCustomerId = 0;
                object.amount = 0;
            }
            if (message.sourceCustomerId != null && message.hasOwnProperty("sourceCustomerId"))
                object.sourceCustomerId = message.sourceCustomerId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this clear_checking_balance to JSON.
         * @function toJSON
         * @memberof structuredBankPackage.clear_checking_balance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        clear_checking_balance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return clear_checking_balance;
    })();

    return structuredBankPackage;
})();

module.exports = $root;
