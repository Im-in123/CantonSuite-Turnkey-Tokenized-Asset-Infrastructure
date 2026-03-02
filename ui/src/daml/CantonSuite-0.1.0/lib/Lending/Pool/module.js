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

var Lending_Types = require('../../Lending/Types/module');


exports.ProcessMixedBatch = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({depositCids: damlTypes.List(damlTypes.ContractId(exports.DepositEffect)).decoder, withdrawalCids: damlTypes.List(damlTypes.ContractId(exports.WithdrawalEffect)).decoder, borrowCids: damlTypes.List(damlTypes.ContractId(exports.BorrowEffect)).decoder, repaymentCids: damlTypes.List(damlTypes.ContractId(exports.RepaymentEffect)).decoder, }); }),
  encode: function (__typed__) {
  return {
    depositCids: damlTypes.List(damlTypes.ContractId(exports.DepositEffect)).encode(__typed__.depositCids),
    withdrawalCids: damlTypes.List(damlTypes.ContractId(exports.WithdrawalEffect)).encode(__typed__.withdrawalCids),
    borrowCids: damlTypes.List(damlTypes.ContractId(exports.BorrowEffect)).encode(__typed__.borrowCids),
    repaymentCids: damlTypes.List(damlTypes.ContractId(exports.RepaymentEffect)).encode(__typed__.repaymentCids),
  };
}
,
};



exports.ProcessWithdrawalBatch = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({withdrawalEffectCids: damlTypes.List(damlTypes.ContractId(exports.WithdrawalEffect)).decoder, }); }),
  encode: function (__typed__) {
  return {
    withdrawalEffectCids: damlTypes.List(damlTypes.ContractId(exports.WithdrawalEffect)).encode(__typed__.withdrawalEffectCids),
  };
}
,
};



exports.ProcessDepositBatch = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({depositEffectCids: damlTypes.List(damlTypes.ContractId(exports.DepositEffect)).decoder, }); }),
  encode: function (__typed__) {
  return {
    depositEffectCids: damlTypes.List(damlTypes.ContractId(exports.DepositEffect)).encode(__typed__.depositEffectCids),
  };
}
,
};



exports.BatchEffectProcessor = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Pool:BatchEffectProcessor',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
  };
}
,
  ProcessDepositBatch: {
    template: function () { return exports.BatchEffectProcessor; },
    choiceName: 'ProcessDepositBatch',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessDepositBatch.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessDepositBatch.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  ProcessWithdrawalBatch: {
    template: function () { return exports.BatchEffectProcessor; },
    choiceName: 'ProcessWithdrawalBatch',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessWithdrawalBatch.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessWithdrawalBatch.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BatchEffectProcessor; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ProcessMixedBatch: {
    template: function () { return exports.BatchEffectProcessor; },
    choiceName: 'ProcessMixedBatch',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProcessMixedBatch.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProcessMixedBatch.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BatchEffectProcessor, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelRepaymentEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApplyRepaymentEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RepaymentEffect = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Pool:RepaymentEffect',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, borrower: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, assetId: damlTypes.Text.decoder, principal: damlTypes.Numeric(10).decoder, interest: damlTypes.Numeric(10).decoder, timestamp: damlTypes.Time.decoder, effectId: damlTypes.Text.decoder, poolSequence: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    borrower: damlTypes.Party.encode(__typed__.borrower),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    principal: damlTypes.Numeric(10).encode(__typed__.principal),
    interest: damlTypes.Numeric(10).encode(__typed__.interest),
    timestamp: damlTypes.Time.encode(__typed__.timestamp),
    effectId: damlTypes.Text.encode(__typed__.effectId),
    poolSequence: damlTypes.Int.encode(__typed__.poolSequence),
  };
}
,
  ApplyRepaymentEffect: {
    template: function () { return exports.RepaymentEffect; },
    choiceName: 'ApplyRepaymentEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApplyRepaymentEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApplyRepaymentEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  CancelRepaymentEffect: {
    template: function () { return exports.RepaymentEffect; },
    choiceName: 'CancelRepaymentEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelRepaymentEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelRepaymentEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RepaymentEffect; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RepaymentEffect, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelBorrowEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApplyBorrowEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.BorrowEffect = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Pool:BorrowEffect',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, borrower: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, timestamp: damlTypes.Time.decoder, effectId: damlTypes.Text.decoder, poolSequence: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    borrower: damlTypes.Party.encode(__typed__.borrower),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    timestamp: damlTypes.Time.encode(__typed__.timestamp),
    effectId: damlTypes.Text.encode(__typed__.effectId),
    poolSequence: damlTypes.Int.encode(__typed__.poolSequence),
  };
}
,
  ApplyBorrowEffect: {
    template: function () { return exports.BorrowEffect; },
    choiceName: 'ApplyBorrowEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApplyBorrowEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApplyBorrowEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.LendingPool).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.LendingPool).encode(__typed__); },
  },
  CancelBorrowEffect: {
    template: function () { return exports.BorrowEffect; },
    choiceName: 'CancelBorrowEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelBorrowEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelBorrowEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BorrowEffect; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BorrowEffect, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelWithdrawalEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApplyWithdrawalEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.WithdrawalEffect = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Pool:WithdrawalEffect',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, user: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, assetId: damlTypes.Text.decoder, shares: damlTypes.Numeric(10).decoder, timestamp: damlTypes.Time.decoder, effectId: damlTypes.Text.decoder, poolSequence: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    user: damlTypes.Party.encode(__typed__.user),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    shares: damlTypes.Numeric(10).encode(__typed__.shares),
    timestamp: damlTypes.Time.encode(__typed__.timestamp),
    effectId: damlTypes.Text.encode(__typed__.effectId),
    poolSequence: damlTypes.Int.encode(__typed__.poolSequence),
  };
}
,
  ApplyWithdrawalEffect: {
    template: function () { return exports.WithdrawalEffect; },
    choiceName: 'ApplyWithdrawalEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApplyWithdrawalEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApplyWithdrawalEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).encode(__typed__); },
  },
  CancelWithdrawalEffect: {
    template: function () { return exports.WithdrawalEffect; },
    choiceName: 'CancelWithdrawalEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelWithdrawalEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelWithdrawalEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.WithdrawalEffect; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.WithdrawalEffect, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CancelDepositEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ApplyDepositEffect = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DepositEffect = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Lending.Pool:DepositEffect',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, user: damlTypes.Party.decoder, poolCid: damlTypes.ContractId(exports.LendingPool).decoder, assetId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, timestamp: damlTypes.Time.decoder, effectId: damlTypes.Text.decoder, poolSequence: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    user: damlTypes.Party.encode(__typed__.user),
    poolCid: damlTypes.ContractId(exports.LendingPool).encode(__typed__.poolCid),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    timestamp: damlTypes.Time.encode(__typed__.timestamp),
    effectId: damlTypes.Text.encode(__typed__.effectId),
    poolSequence: damlTypes.Int.encode(__typed__.poolSequence),
  };
}
,
  ApplyDepositEffect: {
    template: function () { return exports.DepositEffect; },
    choiceName: 'ApplyDepositEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApplyDepositEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApplyDepositEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.LendingPool), damlTypes.Numeric(10)).encode(__typed__); },
  },
  CancelDepositEffect: {
    template: function () { return exports.DepositEffect; },
    choiceName: 'CancelDepositEffect',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelDepositEffect.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelDepositEffect.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DepositEffect; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DepositEffect, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



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



exports.ValidateWithdrawal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({shares: damlTypes.Numeric(10).decoder, user: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    shares: damlTypes.Numeric(10).encode(__typed__.shares),
    user: damlTypes.Party.encode(__typed__.user),
  };
}
,
};



exports.ValidateDeposit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, user: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    user: damlTypes.Party.encode(__typed__.user),
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
  templateId: '#CantonSuite:Lending.Pool:LendingPool',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({poolOperator: damlTypes.Party.decoder, complianceParty: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, totalLiquidity: damlTypes.Numeric(10).decoder, totalBorrowed: damlTypes.Numeric(10).decoder, totalShares: damlTypes.Numeric(10).decoder, interestRate: damlTypes.Numeric(10).decoder, collateralRatio: damlTypes.Numeric(10).decoder, status: Lending_Types.PoolStatus.decoder, regulatorParty: damlTypes.Party.decoder, sequenceNumber: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    poolOperator: damlTypes.Party.encode(__typed__.poolOperator),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    totalLiquidity: damlTypes.Numeric(10).encode(__typed__.totalLiquidity),
    totalBorrowed: damlTypes.Numeric(10).encode(__typed__.totalBorrowed),
    totalShares: damlTypes.Numeric(10).encode(__typed__.totalShares),
    interestRate: damlTypes.Numeric(10).encode(__typed__.interestRate),
    collateralRatio: damlTypes.Numeric(10).encode(__typed__.collateralRatio),
    status: Lending_Types.PoolStatus.encode(__typed__.status),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    sequenceNumber: damlTypes.Int.encode(__typed__.sequenceNumber),
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
  ValidateDeposit: {
    template: function () { return exports.LendingPool; },
    choiceName: 'ValidateDeposit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ValidateDeposit.decoder; }),
    argumentEncode: function (__typed__) { return exports.ValidateDeposit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  ValidateWithdrawal: {
    template: function () { return exports.LendingPool; },
    choiceName: 'ValidateWithdrawal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ValidateWithdrawal.decoder; }),
    argumentEncode: function (__typed__) { return exports.ValidateWithdrawal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
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
  Archive: {
    template: function () { return exports.LendingPool; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.LendingPool, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

