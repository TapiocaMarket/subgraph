// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BuyOrderBooked extends ethereum.Event {
  get params(): BuyOrderBooked__Params {
    return new BuyOrderBooked__Params(this);
  }
}

export class BuyOrderBooked__Params {
  _event: BuyOrderBooked;

  constructor(event: BuyOrderBooked) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get expiration(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get offer(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class BuyOrderCanceled extends ethereum.Event {
  get params(): BuyOrderCanceled__Params {
    return new BuyOrderCanceled__Params(this);
  }
}

export class BuyOrderCanceled__Params {
  _event: BuyOrderCanceled;

  constructor(event: BuyOrderCanceled) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BuyOrderExercised extends ethereum.Event {
  get params(): BuyOrderExercised__Params {
    return new BuyOrderExercised__Params(this);
  }
}

export class BuyOrderExercised__Params {
  _event: BuyOrderExercised;

  constructor(event: BuyOrderExercised) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get offer(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SellOrderBooked extends ethereum.Event {
  get params(): SellOrderBooked__Params {
    return new SellOrderBooked__Params(this);
  }
}

export class SellOrderBooked__Params {
  _event: SellOrderBooked;

  constructor(event: SellOrderBooked) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class SellOrderCanceled extends ethereum.Event {
  get params(): SellOrderCanceled__Params {
    return new SellOrderCanceled__Params(this);
  }
}

export class SellOrderCanceled__Params {
  _event: SellOrderCanceled;

  constructor(event: SellOrderCanceled) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SellOrderExercised extends ethereum.Event {
  get params(): SellOrderExercised__Params {
    return new SellOrderExercised__Params(this);
  }
}

export class SellOrderExercised__Params {
  _event: SellOrderExercised;

  constructor(event: SellOrderExercised) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenContractAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ERC721ExchangeUpgradeable__getBuyOrderResultValue0Struct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get token(): Address {
    return this[1].toAddress();
  }

  get expiration(): BigInt {
    return this[2].toBigInt();
  }

  get offer(): BigInt {
    return this[3].toBigInt();
  }
}

export class ERC721ExchangeUpgradeable__getSellOrderResultValue0Struct extends ethereum.Tuple {
  get expiration(): BigInt {
    return this[0].toBigInt();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }

  get token(): Address {
    return this[2].toAddress();
  }
}

export class ERC721ExchangeUpgradeable extends ethereum.SmartContract {
  static bind(address: Address): ERC721ExchangeUpgradeable {
    return new ERC721ExchangeUpgradeable("ERC721ExchangeUpgradeable", address);
  }

  _sunset(): boolean {
    let result = super.call("_sunset", "_sunset():(bool)", []);

    return result[0].toBoolean();
  }

  try__sunset(): ethereum.CallResult<boolean> {
    let result = super.tryCall("_sunset", "_sunset():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  buyOrderExists(
    _buyer: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): boolean {
    let result = super.call(
      "buyOrderExists",
      "buyOrderExists(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_buyer),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_buyOrderExists(
    _buyer: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "buyOrderExists",
      "buyOrderExists(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_buyer),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getBuyOrder(
    _buyer: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ERC721ExchangeUpgradeable__getBuyOrderResultValue0Struct {
    let result = super.call(
      "getBuyOrder",
      "getBuyOrder(address,address,uint256):((address,address,uint256,uint256))",
      [
        ethereum.Value.fromAddress(_buyer),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return changetype<ERC721ExchangeUpgradeable__getBuyOrderResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getBuyOrder(
    _buyer: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<
    ERC721ExchangeUpgradeable__getBuyOrderResultValue0Struct
  > {
    let result = super.tryCall(
      "getBuyOrder",
      "getBuyOrder(address,address,uint256):((address,address,uint256,uint256))",
      [
        ethereum.Value.fromAddress(_buyer),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ERC721ExchangeUpgradeable__getBuyOrderResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getSellOrder(
    _seller: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ERC721ExchangeUpgradeable__getSellOrderResultValue0Struct {
    let result = super.call(
      "getSellOrder",
      "getSellOrder(address,address,uint256):((uint256,uint256,address))",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return changetype<
      ERC721ExchangeUpgradeable__getSellOrderResultValue0Struct
    >(result[0].toTuple());
  }

  try_getSellOrder(
    _seller: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<
    ERC721ExchangeUpgradeable__getSellOrderResultValue0Struct
  > {
    let result = super.tryCall(
      "getSellOrder",
      "getSellOrder(address,address,uint256):((uint256,uint256,address))",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ERC721ExchangeUpgradeable__getSellOrderResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  orderBook(): Address {
    let result = super.call("orderBook", "orderBook():(address)", []);

    return result[0].toAddress();
  }

  try_orderBook(): ethereum.CallResult<Address> {
    let result = super.tryCall("orderBook", "orderBook():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  royaltyEngine(): Address {
    let result = super.call("royaltyEngine", "royaltyEngine():(address)", []);

    return result[0].toAddress();
  }

  try_royaltyEngine(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "royaltyEngine",
      "royaltyEngine():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sellOrderExists(
    _seller: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): boolean {
    let result = super.call(
      "sellOrderExists",
      "sellOrderExists(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_sellOrderExists(
    _seller: Address,
    _tokenContractAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "sellOrderExists",
      "sellOrderExists(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_seller),
        ethereum.Value.fromAddress(_tokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sunset(): boolean {
    let result = super.call("sunset", "sunset():(bool)", []);

    return result[0].toBoolean();
  }

  try_sunset(): ethereum.CallResult<boolean> {
    let result = super.tryCall("sunset", "sunset():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  version(): BigInt {
    let result = super.call("version", "version():(uint256)", []);

    return result[0].toBigInt();
  }

  try_version(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("version", "version():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wETH(): Address {
    let result = super.call("wETH", "wETH():(address)", []);

    return result[0].toAddress();
  }

  try_wETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("wETH", "wETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class __ERC721Exchange_initCall extends ethereum.Call {
  get inputs(): __ERC721Exchange_initCall__Inputs {
    return new __ERC721Exchange_initCall__Inputs(this);
  }

  get outputs(): __ERC721Exchange_initCall__Outputs {
    return new __ERC721Exchange_initCall__Outputs(this);
  }
}

export class __ERC721Exchange_initCall__Inputs {
  _call: __ERC721Exchange_initCall;

  constructor(call: __ERC721Exchange_initCall) {
    this._call = call;
  }

  get _systemFeePerMille(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _royaltyEngine(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _orderBook(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _wethAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class __ERC721Exchange_initCall__Outputs {
  _call: __ERC721Exchange_initCall;

  constructor(call: __ERC721Exchange_initCall) {
    this._call = call;
  }
}

export class BookBuyOrderCall extends ethereum.Call {
  get inputs(): BookBuyOrderCall__Inputs {
    return new BookBuyOrderCall__Inputs(this);
  }

  get outputs(): BookBuyOrderCall__Outputs {
    return new BookBuyOrderCall__Outputs(this);
  }
}

export class BookBuyOrderCall__Inputs {
  _call: BookBuyOrderCall;

  constructor(call: BookBuyOrderCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _offer(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class BookBuyOrderCall__Outputs {
  _call: BookBuyOrderCall;

  constructor(call: BookBuyOrderCall) {
    this._call = call;
  }
}

export class BookSellOrderCall extends ethereum.Call {
  get inputs(): BookSellOrderCall__Inputs {
    return new BookSellOrderCall__Inputs(this);
  }

  get outputs(): BookSellOrderCall__Outputs {
    return new BookSellOrderCall__Outputs(this);
  }
}

export class BookSellOrderCall__Inputs {
  _call: BookSellOrderCall;

  constructor(call: BookSellOrderCall) {
    this._call = call;
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class BookSellOrderCall__Outputs {
  _call: BookSellOrderCall;

  constructor(call: BookSellOrderCall) {
    this._call = call;
  }
}

export class CancelBuyOrderCall extends ethereum.Call {
  get inputs(): CancelBuyOrderCall__Inputs {
    return new CancelBuyOrderCall__Inputs(this);
  }

  get outputs(): CancelBuyOrderCall__Outputs {
    return new CancelBuyOrderCall__Outputs(this);
  }
}

export class CancelBuyOrderCall__Inputs {
  _call: CancelBuyOrderCall;

  constructor(call: CancelBuyOrderCall) {
    this._call = call;
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelBuyOrderCall__Outputs {
  _call: CancelBuyOrderCall;

  constructor(call: CancelBuyOrderCall) {
    this._call = call;
  }
}

export class CancelSellOrderCall extends ethereum.Call {
  get inputs(): CancelSellOrderCall__Inputs {
    return new CancelSellOrderCall__Inputs(this);
  }

  get outputs(): CancelSellOrderCall__Outputs {
    return new CancelSellOrderCall__Outputs(this);
  }
}

export class CancelSellOrderCall__Inputs {
  _call: CancelSellOrderCall;

  constructor(call: CancelSellOrderCall) {
    this._call = call;
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelSellOrderCall__Outputs {
  _call: CancelSellOrderCall;

  constructor(call: CancelSellOrderCall) {
    this._call = call;
  }
}

export class ExerciseBuyOrderCall extends ethereum.Call {
  get inputs(): ExerciseBuyOrderCall__Inputs {
    return new ExerciseBuyOrderCall__Inputs(this);
  }

  get outputs(): ExerciseBuyOrderCall__Outputs {
    return new ExerciseBuyOrderCall__Outputs(this);
  }
}

export class ExerciseBuyOrderCall__Inputs {
  _call: ExerciseBuyOrderCall;

  constructor(call: ExerciseBuyOrderCall) {
    this._call = call;
  }

  get _bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _offer(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ExerciseBuyOrderCall__Outputs {
  _call: ExerciseBuyOrderCall;

  constructor(call: ExerciseBuyOrderCall) {
    this._call = call;
  }
}

export class ExerciseSellOrderCall extends ethereum.Call {
  get inputs(): ExerciseSellOrderCall__Inputs {
    return new ExerciseSellOrderCall__Inputs(this);
  }

  get outputs(): ExerciseSellOrderCall__Outputs {
    return new ExerciseSellOrderCall__Outputs(this);
  }
}

export class ExerciseSellOrderCall__Inputs {
  _call: ExerciseSellOrderCall;

  constructor(call: ExerciseSellOrderCall) {
    this._call = call;
  }

  get _seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class ExerciseSellOrderCall__Outputs {
  _call: ExerciseSellOrderCall;

  constructor(call: ExerciseSellOrderCall) {
    this._call = call;
  }
}

export class GoTowardsTheSunsetCall extends ethereum.Call {
  get inputs(): GoTowardsTheSunsetCall__Inputs {
    return new GoTowardsTheSunsetCall__Inputs(this);
  }

  get outputs(): GoTowardsTheSunsetCall__Outputs {
    return new GoTowardsTheSunsetCall__Outputs(this);
  }
}

export class GoTowardsTheSunsetCall__Inputs {
  _call: GoTowardsTheSunsetCall;

  constructor(call: GoTowardsTheSunsetCall) {
    this._call = call;
  }
}

export class GoTowardsTheSunsetCall__Outputs {
  _call: GoTowardsTheSunsetCall;

  constructor(call: GoTowardsTheSunsetCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetSystemFeePerMilleCall extends ethereum.Call {
  get inputs(): SetSystemFeePerMilleCall__Inputs {
    return new SetSystemFeePerMilleCall__Inputs(this);
  }

  get outputs(): SetSystemFeePerMilleCall__Outputs {
    return new SetSystemFeePerMilleCall__Outputs(this);
  }
}

export class SetSystemFeePerMilleCall__Inputs {
  _call: SetSystemFeePerMilleCall;

  constructor(call: SetSystemFeePerMilleCall) {
    this._call = call;
  }

  get _newSystemFeePerMille(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSystemFeePerMilleCall__Outputs {
  _call: SetSystemFeePerMilleCall;

  constructor(call: SetSystemFeePerMilleCall) {
    this._call = call;
  }
}

export class SetSystemFeeWalletCall extends ethereum.Call {
  get inputs(): SetSystemFeeWalletCall__Inputs {
    return new SetSystemFeeWalletCall__Inputs(this);
  }

  get outputs(): SetSystemFeeWalletCall__Outputs {
    return new SetSystemFeeWalletCall__Outputs(this);
  }
}

export class SetSystemFeeWalletCall__Inputs {
  _call: SetSystemFeeWalletCall;

  constructor(call: SetSystemFeeWalletCall) {
    this._call = call;
  }

  get _newSystemFeeWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSystemFeeWalletCall__Outputs {
  _call: SetSystemFeeWalletCall;

  constructor(call: SetSystemFeeWalletCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateBuyOrderCall extends ethereum.Call {
  get inputs(): UpdateBuyOrderCall__Inputs {
    return new UpdateBuyOrderCall__Inputs(this);
  }

  get outputs(): UpdateBuyOrderCall__Outputs {
    return new UpdateBuyOrderCall__Outputs(this);
  }
}

export class UpdateBuyOrderCall__Inputs {
  _call: UpdateBuyOrderCall;

  constructor(call: UpdateBuyOrderCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _offer(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class UpdateBuyOrderCall__Outputs {
  _call: UpdateBuyOrderCall;

  constructor(call: UpdateBuyOrderCall) {
    this._call = call;
  }
}

export class UpdateSellOrderCall extends ethereum.Call {
  get inputs(): UpdateSellOrderCall__Inputs {
    return new UpdateSellOrderCall__Inputs(this);
  }

  get outputs(): UpdateSellOrderCall__Outputs {
    return new UpdateSellOrderCall__Outputs(this);
  }
}

export class UpdateSellOrderCall__Inputs {
  _call: UpdateSellOrderCall;

  constructor(call: UpdateSellOrderCall) {
    this._call = call;
  }

  get _tokenContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class UpdateSellOrderCall__Outputs {
  _call: UpdateSellOrderCall;

  constructor(call: UpdateSellOrderCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
