"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Finance_Instruments = require('../../Finance/Instruments/module');
var Lending_Pool = require('../../Lending/Pool/module');
var Lending_Types = require('../../Lending/Types/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.ExecuteTradeWithFees = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerPaymentCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerPaymentCid),
    sellerAssetCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerAssetCid),
  };
}
,
};



exports.TradeAgreementWithFees = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.CrossRegistryCollateral:TradeAgreementWithFees',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, quantity: damlTypes.Numeric(10).decoder, pricePerUnit: damlTypes.Numeric(10).decoder, feeStructure: exports.FeeStructure.decoder, platformParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
    pricePerUnit: damlTypes.Numeric(10).encode(__typed__.pricePerUnit),
    feeStructure: exports.FeeStructure.encode(__typed__.feeStructure),
    platformParty: damlTypes.Party.encode(__typed__.platformParty),
  };
}
,
  ExecuteTradeWithFees: {
    template: function () { return exports.TradeAgreementWithFees; },
    choiceName: 'ExecuteTradeWithFees',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteTradeWithFees.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteTradeWithFees.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.TradeWithFeesResult.decoder; }),
    resultEncode: function (__typed__) { return exports.TradeWithFeesResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TradeAgreementWithFees; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TradeAgreementWithFees, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.TradeWithFeesResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, platformFee: damlTypes.Numeric(10).decoder, feeHolding: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerHolding),
    sellerHolding: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerHolding),
    platformFee: damlTypes.Numeric(10).encode(__typed__.platformFee),
    feeHolding: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.feeHolding),
  };
}
,
};



exports.LiquidateCrossRegistryLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({collateralInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, }); }),
  encode: function (__typed__) {
  return {
    collateralInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.collateralInstrumentCid),
  };
}
,
};



exports.RepayLoanWithFees = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({repaymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    repaymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.repaymentHoldingCid),
  };
}
,
};



exports.CrossRegistryLoan = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.CrossRegistryCollateral:CrossRegistryLoan',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, lender: damlTypes.Party.decoder, lendingAsset: TokenStandard_Interfaces.InstrumentId.decoder, collateralAsset: TokenStandard_Interfaces.InstrumentId.decoder, principal: damlTypes.Numeric(10).decoder, netPrincipal: damlTypes.Numeric(10).decoder, originationFee: damlTypes.Numeric(10).decoder, collateralAmount: damlTypes.Numeric(10).decoder, collateralValueUSD: damlTypes.Numeric(10).decoder, lockedCollateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, originationDate: damlTypes.Time.decoder, maturityDate: damlTypes.Time.decoder, ltv: damlTypes.Numeric(10).decoder, liquidationLTV: damlTypes.Numeric(10).decoder, feeStructure: exports.FeeStructure.decoder, status: Lending_Types.LoanStatus.decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    lender: damlTypes.Party.encode(__typed__.lender),
    lendingAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.lendingAsset),
    collateralAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.collateralAsset),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    netPrincipal: damlTypes.Numeric(10).encode(__typed__.netPrincipal),
    originationFee: damlTypes.Numeric(10).encode(__typed__.originationFee),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    collateralValueUSD: damlTypes.Numeric(10).encode(__typed__.collateralValueUSD),
    lockedCollateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.lockedCollateralCid),
    originationDate: damlTypes.Time.encode(__typed__.originationDate),
    maturityDate: damlTypes.Time.encode(__typed__.maturityDate),
    ltv: damlTypes.Numeric(10).encode(__typed__.ltv),
    liquidationLTV: damlTypes.Numeric(10).encode(__typed__.liquidationLTV),
    feeStructure: exports.FeeStructure.encode(__typed__.feeStructure),
    status: Lending_Types.LoanStatus.encode(__typed__.status),
  };
}
,
  RepayLoanWithFees: {
    template: function () { return exports.CrossRegistryLoan; },
    choiceName: 'RepayLoanWithFees',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RepayLoanWithFees.decoder; }),
    argumentEncode: function (__typed__) { return exports.RepayLoanWithFees.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10), damlTypes.Numeric(10)).encode(__typed__); },
  },
  LiquidateCrossRegistryLoan: {
    template: function () { return exports.CrossRegistryLoan; },
    choiceName: 'LiquidateCrossRegistryLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.LiquidateCrossRegistryLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.LiquidateCrossRegistryLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Numeric(10)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CrossRegistryLoan; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CrossRegistryLoan, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ApproveCrossRegistryLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, collateralInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    collateralInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.collateralInstrumentCid),
  };
}
,
};



exports.CrossRegistryLoanRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.CrossRegistryCollateral:CrossRegistryLoanRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, lendingAsset: TokenStandard_Interfaces.InstrumentId.decoder, collateralAsset: TokenStandard_Interfaces.InstrumentId.decoder, collateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, requestedAmount: damlTypes.Numeric(10).decoder, collateralAmount: damlTypes.Numeric(10).decoder, durationDays: damlTypes.Int.decoder, collateralRegistryCid: damlTypes.ContractId(exports.CollateralRegistry).decoder, createdAt: damlTypes.Time.decoder, feeStructure: exports.FeeStructure.decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    lendingAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.lendingAsset),
    collateralAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.collateralAsset),
    collateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.collateralCid),
    requestedAmount: damlTypes.Numeric(10).encode(__typed__.requestedAmount),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    durationDays: damlTypes.Int.encode(__typed__.durationDays),
    collateralRegistryCid: damlTypes.ContractId(exports.CollateralRegistry).encode(__typed__.collateralRegistryCid),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    feeStructure: exports.FeeStructure.encode(__typed__.feeStructure),
  };
}
,
  ApproveCrossRegistryLoan: {
    template: function () { return exports.CrossRegistryLoanRequest; },
    choiceName: 'ApproveCrossRegistryLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveCrossRegistryLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveCrossRegistryLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.CrossRegistryLoan), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.CrossRegistryLoan), damlTypes.Numeric(10)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CrossRegistryLoanRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CrossRegistryLoanRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CollateralTerms = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({maxLTV: damlTypes.Numeric(10).decoder, liquidationLTV: damlTypes.Numeric(10).decoder, minimumValueUSD: damlTypes.Numeric(10).decoder, haircut: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    maxLTV: damlTypes.Numeric(10).encode(__typed__.maxLTV),
    liquidationLTV: damlTypes.Numeric(10).encode(__typed__.liquidationLTV),
    minimumValueUSD: damlTypes.Numeric(10).encode(__typed__.minimumValueUSD),
    haircut: damlTypes.Numeric(10).encode(__typed__.haircut),
  };
}
,
};



exports.RemoveCollateralAsset = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrumentToRemove: TokenStandard_Interfaces.InstrumentId.decoder, }); }),
  encode: function (__typed__) {
  return {
    instrumentToRemove: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrumentToRemove),
  };
}
,
};



exports.AddCollateralAsset = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newInstrument: TokenStandard_Interfaces.InstrumentId.decoder, terms: exports.CollateralTerms.decoder, }); }),
  encode: function (__typed__) {
  return {
    newInstrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.newInstrument),
    terms: exports.CollateralTerms.encode(__typed__.terms),
  };
}
,
};



exports.GetCollateralTerms = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({checkInstrument: TokenStandard_Interfaces.InstrumentId.decoder, }); }),
  encode: function (__typed__) {
  return {
    checkInstrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.checkInstrument),
  };
}
,
};



exports.IsAcceptedCollateral = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({checkInstrument: TokenStandard_Interfaces.InstrumentId.decoder, }); }),
  encode: function (__typed__) {
  return {
    checkInstrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.checkInstrument),
  };
}
,
};



exports.CollateralRegistry = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.CrossRegistryCollateral:CollateralRegistry',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({registry: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, acceptedAssets: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(TokenStandard_Interfaces.InstrumentId, exports.CollateralTerms)).decoder, }); }),
  encode: function (__typed__) {
  return {
    registry: damlTypes.Party.encode(__typed__.registry),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    acceptedAssets: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(TokenStandard_Interfaces.InstrumentId, exports.CollateralTerms)).encode(__typed__.acceptedAssets),
  };
}
,
  Archive: {
    template: function () { return exports.CollateralRegistry; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  IsAcceptedCollateral: {
    template: function () { return exports.CollateralRegistry; },
    choiceName: 'IsAcceptedCollateral',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IsAcceptedCollateral.decoder; }),
    argumentEncode: function (__typed__) { return exports.IsAcceptedCollateral.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  GetCollateralTerms: {
    template: function () { return exports.CollateralRegistry; },
    choiceName: 'GetCollateralTerms',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetCollateralTerms.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetCollateralTerms.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(exports.CollateralTerms).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Optional(exports.CollateralTerms).encode(__typed__); },
  },
  AddCollateralAsset: {
    template: function () { return exports.CollateralRegistry; },
    choiceName: 'AddCollateralAsset',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddCollateralAsset.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddCollateralAsset.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CollateralRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CollateralRegistry).encode(__typed__); },
  },
  RemoveCollateralAsset: {
    template: function () { return exports.CollateralRegistry; },
    choiceName: 'RemoveCollateralAsset',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveCollateralAsset.decoder; }),
    argumentEncode: function (__typed__) { return exports.RemoveCollateralAsset.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CollateralRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CollateralRegistry).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CollateralRegistry, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.FeeStructure = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({originationFeeBps: damlTypes.Numeric(10).decoder, managementFeeBps: damlTypes.Numeric(10).decoder, tradingFeeBps: damlTypes.Numeric(10).decoder, redemptionFeeBps: damlTypes.Numeric(10).decoder, performanceFeeBps: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    originationFeeBps: damlTypes.Numeric(10).encode(__typed__.originationFeeBps),
    managementFeeBps: damlTypes.Numeric(10).encode(__typed__.managementFeeBps),
    tradingFeeBps: damlTypes.Numeric(10).encode(__typed__.tradingFeeBps),
    redemptionFeeBps: damlTypes.Numeric(10).encode(__typed__.redemptionFeeBps),
    performanceFeeBps: damlTypes.Numeric(10).encode(__typed__.performanceFeeBps),
  };
}
,
};

