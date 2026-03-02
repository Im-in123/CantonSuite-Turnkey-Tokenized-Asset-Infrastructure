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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

exports.Allocation = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Allocation',
  function () { return exports.AllocationView; },
  {
    Archive: {
      template: function () { return exports.Allocation; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });


exports.AllocationInstruction = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationInstruction',
  function () { return exports.AllocationInstructionView; },
  {
    Archive: {
      template: function () { return exports.AllocationInstruction; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });


exports.AllocationRequest = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:AllocationRequest',
  function () { return exports.AllocationRequestView; },
  {
    Archive: {
      template: function () { return exports.AllocationRequest; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });


exports.Holding = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:Holding',
  function () { return exports.HoldingView; },
  {
    Archive: {
      template: function () { return exports.Holding; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });


exports.TokenMetadata = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TokenMetadata',
  function () { return exports.TokenMetadataView; },
  {
    Archive: {
      template: function () { return exports.TokenMetadata; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });


exports.TransferInstruction = damlTypes.assembleInterface(
  '7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53:TokenStandard.Interfaces:TransferInstruction',
  function () { return exports.TransferInstructionView; },
  {
    Archive: {
      template: function () { return exports.TransferInstruction; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });



exports.AllocationInstructionView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holder: damlTypes.Party.decoder, instrument: exports.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    holder: damlTypes.Party.encode(__typed__.holder),
    instrument: exports.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.AllocationRequestView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holder: damlTypes.Party.decoder, instrument: exports.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    holder: damlTypes.Party.encode(__typed__.holder),
    instrument: exports.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.AllocationView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, instrument: exports.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    instrument: exports.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.AllocationResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({receiverHoldingCid: damlTypes.ContractId(exports.Holding).decoder, resultMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    receiverHoldingCid: damlTypes.ContractId(exports.Holding).encode(__typed__.receiverHoldingCid),
    resultMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.resultMetadata),
  };
}
,
};



exports.TransferInstructionView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, instrument: exports.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, deadline: damlTypes.Time.decoder, status: exports.TransferStatus.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    instrument: exports.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    status: exports.TransferStatus.encode(__typed__.status),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.TransferResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({receiverHoldingCid: damlTypes.ContractId(exports.Holding).decoder, resultMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    receiverHoldingCid: damlTypes.ContractId(exports.Holding).encode(__typed__.receiverHoldingCid),
    resultMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.resultMetadata),
  };
}
,
};



exports.TransferStatus = {
  Pending: 'Pending',
  Executed: 'Executed',
  Aborted: 'Aborted',
  Withdrawn: 'Withdrawn',
  keys: ['Pending','Executed','Aborted','Withdrawn',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.TransferStatus.Pending), jtv.constant(exports.TransferStatus.Executed), jtv.constant(exports.TransferStatus.Aborted), jtv.constant(exports.TransferStatus.Withdrawn)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.HoldingView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrument: exports.InstrumentId.decoder, account: exports.AccountId.decoder, amount: damlTypes.Numeric(10).decoder, locked: damlTypes.Bool.decoder, lockContext: damlTypes.Optional(damlTypes.Text).decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrument: exports.InstrumentId.encode(__typed__.instrument),
    account: exports.AccountId.encode(__typed__.account),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    locked: damlTypes.Bool.encode(__typed__.locked),
    lockContext: damlTypes.Optional(damlTypes.Text).encode(__typed__.lockContext),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.TokenMetadataView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrumentId: exports.InstrumentId.decoder, name: damlTypes.Text.decoder, symbol: damlTypes.Text.decoder, assetType: damlTypes.Text.decoder, registryUrl: damlTypes.Optional(damlTypes.Text).decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrumentId: exports.InstrumentId.encode(__typed__.instrumentId),
    name: damlTypes.Text.encode(__typed__.name),
    symbol: damlTypes.Text.encode(__typed__.symbol),
    assetType: damlTypes.Text.encode(__typed__.assetType),
    registryUrl: damlTypes.Optional(damlTypes.Text).encode(__typed__.registryUrl),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
};



exports.AccountId = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({custodian: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, id: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    custodian: damlTypes.Party.encode(__typed__.custodian),
    owner: damlTypes.Party.encode(__typed__.owner),
    id: damlTypes.Text.encode(__typed__.id),
  };
}
,
};



exports.InstrumentId = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({depository: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, id: damlTypes.Text.decoder, version: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    depository: damlTypes.Party.encode(__typed__.depository),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    id: damlTypes.Text.encode(__typed__.id),
    version: damlTypes.Text.encode(__typed__.version),
  };
}
,
};

