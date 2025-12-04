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

var Portfolio = require('../Portfolio/module');


exports.LendingRegulatorView = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:LendingRegulatorView',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({regulator: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, loanId: damlTypes.Text.decoder, assetId: damlTypes.Text.decoder, principal: damlTypes.Numeric(10).decoder, collateralRatio: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, status: damlTypes.Text.decoder, originationDate: damlTypes.Time.decoder, maturityDate: damlTypes.Time.decoder, eventType: damlTypes.Text.decoder, eventTimestamp: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    regulator: damlTypes.Party.encode(__typed__.regulator),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    loanId: damlTypes.Text.encode(__typed__.loanId),
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


damlTypes.registerTemplate(exports.LendingRegulatorView, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.RepayLoan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({repaymentAllocCid: damlTypes.ContractId(Portfolio.Allocation).decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    repaymentAllocCid: damlTypes.ContractId(Portfolio.Allocation).encode(__typed__.repaymentAllocCid),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.Loan = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:Loan',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, lender: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, principal: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, collateralAssetId: damlTypes.Text.decoder, collateralAmount: damlTypes.Numeric(10).decoder, collateralLocked: damlTypes.ContractId(Portfolio.Allocation).decoder, originationDate: damlTypes.Time.decoder, maturityDate: damlTypes.Time.decoder, status: exports.LoanStatus.decoder, regulatorParty: damlTypes.Party.decoder, complianceParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    lender: damlTypes.Party.encode(__typed__.lender),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    collateralAssetId: damlTypes.Text.encode(__typed__.collateralAssetId),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    collateralLocked: damlTypes.ContractId(Portfolio.Allocation).encode(__typed__.collateralLocked),
    originationDate: damlTypes.Time.encode(__typed__.originationDate),
    maturityDate: damlTypes.Time.encode(__typed__.maturityDate),
    status: exports.LoanStatus.encode(__typed__.status),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
  };
}
,
  RepayLoan: {
    template: function () { return exports.Loan; },
    choiceName: 'RepayLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RepayLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.RepayLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Portfolio.Allocation), damlTypes.ContractId(exports.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Portfolio.Allocation), damlTypes.ContractId(exports.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
  },
  LiquidateCollateral: {
    template: function () { return exports.Loan; },
    choiceName: 'LiquidateCollateral',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.LiquidateCollateral.decoder; }),
    argumentEncode: function (__typed__) { return exports.LiquidateCollateral.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Portfolio.Allocation), damlTypes.ContractId(exports.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Portfolio.Allocation), damlTypes.ContractId(exports.LendingPool), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
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


damlTypes.registerTemplate(exports.Loan, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.LoanRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:LoanRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({borrower: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, requestedAmount: damlTypes.Numeric(10).decoder, collateralAssetId: damlTypes.Text.decoder, collateralAmount: damlTypes.Numeric(10).decoder, collateralCid: damlTypes.ContractId(Portfolio.Allocation).decoder, durationDays: damlTypes.Int.decoder, createdAt: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    borrower: damlTypes.Party.encode(__typed__.borrower),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    requestedAmount: damlTypes.Numeric(10).encode(__typed__.requestedAmount),
    collateralAssetId: damlTypes.Text.encode(__typed__.collateralAssetId),
    collateralAmount: damlTypes.Numeric(10).encode(__typed__.collateralAmount),
    collateralCid: damlTypes.ContractId(Portfolio.Allocation).encode(__typed__.collateralCid),
    durationDays: damlTypes.Int.encode(__typed__.durationDays),
    createdAt: damlTypes.Time.encode(__typed__.createdAt),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
  };
}
,
  ApproveLoan: {
    template: function () { return exports.LoanRequest; },
    choiceName: 'ApproveLoan',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveLoan.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveLoan.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.Loan), damlTypes.ContractId(exports.LendingRegulatorView)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.Loan), damlTypes.ContractId(exports.LendingRegulatorView)).encode(__typed__); },
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


damlTypes.registerTemplate(exports.LoanRequest, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.CancelWithdrawalRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectWithdrawal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApproveWithdrawal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.WithdrawalRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:WithdrawalRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, shares: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    shares: damlTypes.Numeric(10).encode(__typed__.shares),
  };
}
,
  Archive: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ApproveWithdrawal: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'ApproveWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Portfolio.Allocation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Portfolio.Allocation).encode(__typed__); },
  },
  RejectWithdrawal: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'RejectWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LenderShare).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LenderShare).encode(__typed__); },
  },
  CancelWithdrawalRequest: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'CancelWithdrawalRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelWithdrawalRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelWithdrawalRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LenderShare).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LenderShare).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.WithdrawalRequest, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.RequestWithdrawal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sharesToWithdraw: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    sharesToWithdraw: damlTypes.Numeric(10).encode(__typed__.sharesToWithdraw),
  };
}
,
};



exports.LenderShare = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:LenderShare',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, shareAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    shareAmount: damlTypes.Numeric(10).encode(__typed__.shareAmount),
  };
}
,
  Archive: {
    template: function () { return exports.LenderShare; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RequestWithdrawal: {
    template: function () { return exports.LenderShare; },
    choiceName: 'RequestWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.WithdrawalRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.WithdrawalRequest).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LenderShare, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.CancelDepositRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptDeposit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.DepositRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:DepositRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  Archive: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptDeposit: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'AcceptDeposit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptDeposit.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptDeposit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LenderShare), damlTypes.ContractId(exports.LendingPool)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LenderShare), damlTypes.ContractId(exports.LendingPool)).encode(__typed__); },
  },
  CancelDepositRequest: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'CancelDepositRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelDepositRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelDepositRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DepositRequest, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.UpdatePoolOnDefault = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({loanAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    loanAmount: damlTypes.Numeric(10).encode(__typed__.loanAmount),
  };
}
,
};



exports.UpdatePoolOnRepayment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({principal: damlTypes.Numeric(10).decoder, interest: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    interest: damlTypes.Numeric(10).encode(__typed__.interest),
  };
}
,
};



exports.UpdatePoolOnBorrow = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};



exports.ProcessWithdrawal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({shares: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    shares: damlTypes.Numeric(10).encode(__typed__.shares),
  };
}
,
};



exports.ProcessDeposit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};



exports.InitiateClosure = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.UpdateInterestRate = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newRate: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newRate: damlTypes.Numeric(10).encode(__typed__.newRate),
  };
}
,
};



exports.GetSharePrice = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.LendingPool = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending:LendingPool',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, totalLiquidity: damlTypes.Numeric(10).decoder, totalBorrowed: damlTypes.Numeric(10).decoder, totalShares: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, collateralRatio: damlTypes.Numeric(10).decoder, status: exports.PoolStatus.decoder, observers: damlTypes.List(damlTypes.Party).decoder, regulatorParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalLiquidity: damlTypes.Numeric(10).encode(__typed__.totalLiquidity),
    totalBorrowed: damlTypes.Numeric(10).encode(__typed__.totalBorrowed),
    totalShares: damlTypes.Numeric(10).encode(__typed__.totalShares),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    collateralRatio: damlTypes.Numeric(10).encode(__typed__.collateralRatio),
    status: exports.PoolStatus.encode(__typed__.status),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
  };
}
,
  GetSharePrice: {
    template: function () { return exports.LendingPool; },
    choiceName: 'GetSharePrice',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetSharePrice.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetSharePrice.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Numeric(10).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Numeric(10).encode(__typed__); },
  },
  ProcessDeposit: {
    template: function () { return exports.LendingPool; },
    choiceName: 'ProcessDeposit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessDeposit.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessDeposit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).encode(__typed__); },
  },
  ProcessWithdrawal: {
    template: function () { return exports.LendingPool; },
    choiceName: 'ProcessWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.LendingPool; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  UpdateInterestRate: {
    template: function () { return exports.LendingPool; },
    choiceName: 'UpdateInterestRate',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateInterestRate.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateInterestRate.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  InitiateClosure: {
    template: function () { return exports.LendingPool; },
    choiceName: 'InitiateClosure',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateClosure.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateClosure.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  UpdatePoolOnBorrow: {
    template: function () { return exports.LendingPool; },
    choiceName: 'UpdatePoolOnBorrow',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePoolOnBorrow.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePoolOnBorrow.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  UpdatePoolOnRepayment: {
    template: function () { return exports.LendingPool; },
    choiceName: 'UpdatePoolOnRepayment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePoolOnRepayment.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePoolOnRepayment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  UpdatePoolOnDefault: {
    template: function () { return exports.LendingPool; },
    choiceName: 'UpdatePoolOnDefault',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePoolOnDefault.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePoolOnDefault.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LendingPool, ['c6c356df9caac6e0a55ad53c813a7be5d5350d8c59e3dd98e83d7586b9815d0f', '#CantonSuite']);



exports.LoanStatus = {
  Active: 'Active',
  Defaulted: 'Defaulted',
  Repaid: 'Repaid',
  keys: ['Active','Defaulted','Repaid',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.LoanStatus.Active), jtv.constant(exports.LoanStatus.Defaulted), jtv.constant(exports.LoanStatus.Repaid)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.PoolStatus = {
  Open: 'Open',
  Closing: 'Closing',
  Closed: 'Closed',
  keys: ['Open','Closing','Closed',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.PoolStatus.Open), jtv.constant(exports.PoolStatus.Closing), jtv.constant(exports.PoolStatus.Closed)); }),
  encode: function (__typed__) { return __typed__; },
};

