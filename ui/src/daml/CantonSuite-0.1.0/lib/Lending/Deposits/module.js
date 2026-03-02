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

var Lending_Pool = require('../../Lending/Pool/module');
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, existingHoldingCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
    existingHoldingCid: damlTypes.Optional(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.existingHoldingCid),
  };
}
,
};



exports.WithdrawalRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Deposits:WithdrawalRequest',
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
  ApproveWithdrawal: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'ApproveWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Lending_Pool.WithdrawalEffect), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Lending_Pool.WithdrawalEffect), damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__); },
  },
  RejectWithdrawal: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'RejectWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LenderShare).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LenderShare).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.WithdrawalRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
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


damlTypes.registerTemplate(exports.WithdrawalRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



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
  templateId: '#CantonSuite:Lending.Deposits:LenderShare',
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
  RequestWithdrawal: {
    template: function () { return exports.LenderShare; },
    choiceName: 'RequestWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.WithdrawalRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.WithdrawalRequest).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.LenderShare; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LenderShare, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelDepositRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptDeposit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolCid: damlTypes.ContractId(Lending_Pool.LendingPool).encode(__typed__.poolCid),
  };
}
,
};



exports.DepositRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Deposits:DepositRequest',
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
  AcceptDeposit: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'AcceptDeposit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptDeposit.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptDeposit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Lending_Pool.DepositEffect), damlTypes.ContractId(exports.LenderShare)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Lending_Pool.DepositEffect), damlTypes.ContractId(exports.LenderShare)).encode(__typed__); },
  },
  CancelDepositRequest: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'CancelDepositRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelDepositRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelDepositRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DepositRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DepositRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

