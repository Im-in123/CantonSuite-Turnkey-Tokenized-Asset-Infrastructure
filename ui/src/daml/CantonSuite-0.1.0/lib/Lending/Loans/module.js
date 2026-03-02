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

var CantonCoin_MiningRoundSync = require('../../CantonCoin/MiningRoundSync/module');
var Lending_Pool = require('../../Lending/Pool/module');
var Lending_Types = require('../../Lending/Types/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.LendingRegulatorView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Loans:LendingRegulatorView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, loanIdHash: damlTypes.Text.decoder, borrowerHash: damlTypes.Text.decoder, assetId: damlTypes.Text.decoder, principal: damlTypes.Numeric(10).decoder, collateralRatio: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, status: damlTypes.Text.decoder, originationDate: damlTypes.Time.decoder, maturityDate: damlTypes.Time.decoder, eventType: damlTypes.Text.decoder, eventTimestamp: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    loanIdHash: damlTypes.Text.encode(__typed__.loanIdHash),
    borrowerHash: damlTypes.Text.encode(__typed__.borrowerHash),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    collateralRatio: damlTypes.Numeric(10).encode(__typed__.collateralRatio),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    status: damlTypes.Text.encode(__typed__.status),
    originationDate: damlTypes.Time.encode(__typed__.originationDate),
    maturityDate: damlTypes.Time.encode(__typed__.maturityDate),
    eventType: damlTypes.Text.encode(__typed__.eventType),
    eventTimestamp: damlTypes.Time.encode(__typed__.eventTimestamp),
  };
}
,
  Archive: {
    template: function () { return exports.LendingRegulatorView; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LendingRegulatorView, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExtendLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({additionalDays: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    additionalDays: damlTypes.Int.encode(__typed__.additionalDays),
  };
}
,
};



exports.LiquidateCollateral = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.RepayLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({repaymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, existingCollateralCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, }); }),
  encode: function (__typed__) {
  return {
    repaymentHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.repaymentHoldingCid),
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    existingCollateralCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.existingCollateralCid),
  };
}
,
};



exports.Loan = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Loans:Loan',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, lender: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, principal: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, collateralAssetId: damlTypes.Text.decoder, collateralAmount: damlTypes.Numeric(10).decoder, collateralTransferCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).decoder, originationDate: damlTypes.Time.decoder, maturityDate: damlTypes.Time.decoder, status: Lending_Types.LoanStatus.decoder, regulatorParty: damlTypes.Party.decoder, complianceParty: damlTypes.Party.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    lender: damlTypes.Party.encode(__typed__.lender),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    collateralAssetId: damlTypes.Text.encode(__typed__.collateralAssetId),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    collateralTransferCid: damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction).encode(__typed__.collateralTransferCid),
    originationDate: damlTypes.Time.encode(__typed__.originationDate),
    maturityDate: damlTypes.Time.encode(__typed__.maturityDate),
    status: Lending_Types.LoanStatus.encode(__typed__.status),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
  RepayLoan: {
    template: function () { return exports.Loan; },
    choiceName: 'RepayLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RepayLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.RepayLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(Lending_Pool.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(Lending_Pool.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
  },
  LiquidateCollateral: {
    template: function () { return exports.Loan; },
    choiceName: 'LiquidateCollateral',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.LiquidateCollateral.decoder; }),
    argumentEncode: function (__typed__) { return exports.LiquidateCollateral.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(Lending_Pool.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(Lending_Pool.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Loan; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ExtendLoan: {
    template: function () { return exports.Loan; },
    choiceName: 'ExtendLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExtendLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExtendLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Loan).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Loan).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Loan, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApproveLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, existingCashCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, borrowerCurrentSync: damlTypes.Text.decoder, poolCurrentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    existingCashCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.existingCashCid),
    borrowerCurrentSync: damlTypes.Text.encode(__typed__.borrowerCurrentSync),
    poolCurrentSync: damlTypes.Text.encode(__typed__.poolCurrentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
};



exports.LoanRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Loans:LoanRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, requestedAmount: damlTypes.Numeric(10).decoder, collateralAssetId: damlTypes.Text.decoder, collateralAmount: damlTypes.Numeric(10).decoder, collateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, durationDays: damlTypes.Int.decoder, createdAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    requestedAmount: damlTypes.Numeric(10).encode(__typed__.requestedAmount),
    collateralAssetId: damlTypes.Text.encode(__typed__.collateralAssetId),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    collateralCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.collateralCid),
    durationDays: damlTypes.Int.encode(__typed__.durationDays),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    miningRoundCid: damlTypes.Optional(damlTypes.ContractId(CantonCoin_MiningRoundSync.MiningRoundReference)).encode(__typed__.miningRoundCid),
  };
}
,
  ApproveLoan: {
    template: function () { return exports.LoanRequest; },
    choiceName: 'ApproveLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(exports.Loan), damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(exports.Loan), damlTypes.ContractId(TokenStandard_Interfaces.TransferInstruction), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.LoanRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RejectLoan: {
    template: function () { return exports.LoanRequest; },
    choiceName: 'RejectLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CancelRequest: {
    template: function () { return exports.LoanRequest; },
    choiceName: 'CancelRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LoanRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

