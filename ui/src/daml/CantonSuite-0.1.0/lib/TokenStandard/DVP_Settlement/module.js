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

var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.ExecuteAllocationInstruction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.AllocationInstruction).decoder, }); }),
  encode: function (__typed__) {
  return {
    instructionCid: damlTypes.ContractId(TokenStandard_Interfaces.AllocationInstruction).encode(__typed__.instructionCid),
  };
}
,
};



exports.AllocationExecutionHandler = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.DVP_Settlement:AllocationExecutionHandler',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({registry: damlTypes.Party.decoder, complianceParty: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    registry: damlTypes.Party.encode(__typed__.registry),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
  };
}
,
  Archive: {
    template: function () { return exports.AllocationExecutionHandler; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ExecuteAllocationInstruction: {
    template: function () { return exports.AllocationExecutionHandler; },
    choiceName: 'ExecuteAllocationInstruction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAllocationInstruction.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAllocationInstruction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Allocation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Allocation).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AllocationExecutionHandler, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AtomicDVPResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sellerReceivedPayment: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, buyerReceivedAsset: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, executedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    sellerReceivedPayment: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerReceivedPayment),
    buyerReceivedAsset: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerReceivedAsset),
    executedAt: damlTypes.Time.encode(__typed__.executedAt),
  };
}
,
};



exports.ExtendDeadline = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newDeadline: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    newDeadline: damlTypes.Time.encode(__typed__.newDeadline),
  };
}
,
};



exports.CancelSettlement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.ExecuteAtomicDVP = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerAllocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).decoder, sellerAllocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerAllocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).encode(__typed__.buyerAllocationCid),
    sellerAllocationCid: damlTypes.ContractId(TokenStandard_Interfaces.Allocation).encode(__typed__.sellerAllocationCid),
  };
}
,
};



exports.RequestAllocationsWithSyncCheck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerCurrentSync: damlTypes.Text.decoder, sellerCurrentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerCurrentSync: damlTypes.Text.encode(__typed__.buyerCurrentSync),
    sellerCurrentSync: damlTypes.Text.encode(__typed__.sellerCurrentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
};



exports.RequestAllocations = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DVPSettlement = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.DVP_Settlement:DVPSettlement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({settlementId: damlTypes.Text.decoder, settlementApp: damlTypes.Party.decoder, buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, buyerAsset: TokenStandard_Interfaces.InstrumentId.decoder, sellerAsset: TokenStandard_Interfaces.InstrumentId.decoder, buyerAmount: damlTypes.Numeric(10).decoder, sellerAmount: damlTypes.Numeric(10).decoder, deadline: damlTypes.Time.decoder, complianceParty: damlTypes.Party.decoder, regulatorParty: damlTypes.Party.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    buyerAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.buyerAsset),
    sellerAsset: TokenStandard_Interfaces.InstrumentId.encode(__typed__.sellerAsset),
    buyerAmount: damlTypes.Numeric(10).encode(__typed__.buyerAmount),
    sellerAmount: damlTypes.Numeric(10).encode(__typed__.sellerAmount),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    complianceParty: damlTypes.Party.encode(__typed__.complianceParty),
    regulatorParty: damlTypes.Party.encode(__typed__.regulatorParty),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
  RequestAllocations: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'RequestAllocations',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestAllocations.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestAllocations.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest), damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest), damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest)).encode(__typed__); },
  },
  RequestAllocationsWithSyncCheck: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'RequestAllocationsWithSyncCheck',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestAllocationsWithSyncCheck.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestAllocationsWithSyncCheck.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest), damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.Text, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest), damlTypes.ContractId(TokenStandard_Interfaces.AllocationRequest))).encode(__typed__); },
  },
  ExecuteAtomicDVP: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'ExecuteAtomicDVP',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteAtomicDVP.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteAtomicDVP.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.AtomicDVPResult.decoder; }),
    resultEncode: function (__typed__) { return exports.AtomicDVPResult.encode(__typed__); },
  },
  CancelSettlement: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'CancelSettlement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelSettlement.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelSettlement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ExtendDeadline: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'ExtendDeadline',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExtendDeadline.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExtendDeadline.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DVPSettlement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DVPSettlement).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.DVPSettlement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DVPSettlement, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.WithdrawInstruction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.withdrawMetadata),
  };
}
,
};



exports.AbortInstruction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, abortMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    abortMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.abortMetadata),
  };
}
,
};



exports.ExecuteInstruction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    executionMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.executionMetadata),
  };
}
,
};



exports.AllocationInstruction_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.DVP_Settlement:AllocationInstruction_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holder: damlTypes.Party.decoder, instrument: TokenStandard_Interfaces.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, sourceHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    holder: damlTypes.Party.encode(__typed__.holder),
    instrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
    sourceHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sourceHoldingCid),
  };
}
,
  ExecuteInstruction: {
    template: function () { return exports.AllocationInstruction_Impl; },
    choiceName: 'ExecuteInstruction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteInstruction.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteInstruction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Allocation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Allocation).encode(__typed__); },
  },
  AbortInstruction: {
    template: function () { return exports.AllocationInstruction_Impl; },
    choiceName: 'AbortInstruction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AbortInstruction.decoder; }),
    argumentEncode: function (__typed__) { return exports.AbortInstruction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawInstruction: {
    template: function () { return exports.AllocationInstruction_Impl; },
    choiceName: 'WithdrawInstruction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawInstruction.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawInstruction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AllocationInstruction_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.AllocationInstruction
);


damlTypes.registerTemplate(exports.AllocationInstruction_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.RejectRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, rejectMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    rejectMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.rejectMetadata),
  };
}
,
};



exports.AcceptRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, acceptMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    acceptMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.acceptMetadata),
  };
}
,
};



exports.AllocationRequest_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.DVP_Settlement:AllocationRequest_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holder: damlTypes.Party.decoder, instrument: TokenStandard_Interfaces.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    holder: damlTypes.Party.encode(__typed__.holder),
    instrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
  };
}
,
  AcceptRequest: {
    template: function () { return exports.AllocationRequest_Impl; },
    choiceName: 'AcceptRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.AllocationInstruction).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.AllocationInstruction).encode(__typed__); },
  },
  RejectRequest: {
    template: function () { return exports.AllocationRequest_Impl; },
    choiceName: 'RejectRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AllocationRequest_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.AllocationRequest
);


damlTypes.registerTemplate(exports.AllocationRequest_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.WithdrawAllocation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
    withdrawMetadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.withdrawMetadata),
  };
}
,
};



exports.Allocation_Impl = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:TokenStandard.DVP_Settlement:Allocation_Impl',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, instrument: TokenStandard_Interfaces.InstrumentId.decoder, amount: damlTypes.Numeric(10).decoder, settlementId: damlTypes.Text.decoder, deadline: damlTypes.Time.decoder, settlementApp: damlTypes.Party.decoder, metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, lockedHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    instrument: TokenStandard_Interfaces.InstrumentId.encode(__typed__.instrument),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    metadata: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.metadata),
    lockedHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.lockedHoldingCid),
  };
}
,
  WithdrawAllocation: {
    template: function () { return exports.Allocation_Impl; },
    choiceName: 'WithdrawAllocation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawAllocation.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawAllocation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Allocation_Impl; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, TokenStandard_Interfaces.Allocation
);


damlTypes.registerTemplate(exports.Allocation_Impl, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

