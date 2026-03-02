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


exports.PreparationResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({ready: damlTypes.Bool.decoder, buyerMigrationCid: damlTypes.Optional(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).decoder, sellerMigrationCid: damlTypes.Optional(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).decoder, estimatedWaitTime: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    ready: damlTypes.Bool.encode(__typed__.ready),
    buyerMigrationCid: damlTypes.Optional(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).encode(__typed__.buyerMigrationCid),
    sellerMigrationCid: damlTypes.Optional(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).encode(__typed__.sellerMigrationCid),
    estimatedWaitTime: damlTypes.Int.encode(__typed__.estimatedWaitTime),
  };
}
,
};



exports.PrepareForSettlement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyerCurrentSync: damlTypes.Text.decoder, sellerCurrentSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyerCurrentSync: damlTypes.Text.encode(__typed__.buyerCurrentSync),
    sellerCurrentSync: damlTypes.Text.encode(__typed__.sellerCurrentSync),
  };
}
,
};



exports.DVPSettlementWithMigration = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:DVPSettlementWithMigration',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({settlementId: damlTypes.Text.decoder, settlementApp: damlTypes.Party.decoder, buyer: damlTypes.Party.decoder, seller: damlTypes.Party.decoder, buyerHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, sellerHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, deadline: damlTypes.Time.decoder, targetSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    settlementApp: damlTypes.Party.encode(__typed__.settlementApp),
    buyer: damlTypes.Party.encode(__typed__.buyer),
    seller: damlTypes.Party.encode(__typed__.seller),
    buyerHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.buyerHoldingCid),
    sellerHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.sellerHoldingCid),
    deadline: damlTypes.Time.encode(__typed__.deadline),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
  };
}
,
  Archive: {
    template: function () { return exports.DVPSettlementWithMigration; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  PrepareForSettlement: {
    template: function () { return exports.DVPSettlementWithMigration; },
    choiceName: 'PrepareForSettlement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PrepareForSettlement.decoder; }),
    argumentEncode: function (__typed__) { return exports.PrepareForSettlement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.PreparationResult.decoder; }),
    resultEncode: function (__typed__) { return exports.PreparationResult.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.DVPSettlementWithMigration, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MigrationPlan = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationRequired: damlTypes.Bool.decoder, holdingsToMigrate: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, estimatedTime: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationRequired: damlTypes.Bool.encode(__typed__.migrationRequired),
    holdingsToMigrate: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.holdingsToMigrate),
    estimatedTime: damlTypes.Int.encode(__typed__.estimatedTime),
  };
}
,
};



exports.InitiateBatchMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingSyncInfo: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingSyncInfo: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).encode(__typed__.holdingSyncInfo),
  };
}
,
};



exports.CheckMigrationNeeded = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({holdingSyncMeta: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).decoder, }); }),
  encode: function (__typed__) {
  return {
    holdingSyncMeta: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).encode(__typed__.holdingSyncMeta),
  };
}
,
};



exports.PreSettlementMigrationCoordinator = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:PreSettlementMigrationCoordinator',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coordinator: damlTypes.Party.decoder, settlementId: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, buyerHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, sellerHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, deadline: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    coordinator: damlTypes.Party.encode(__typed__.coordinator),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
    buyerHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.buyerHoldings),
    sellerHoldings: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.sellerHoldings),
    deadline: damlTypes.Time.encode(__typed__.deadline),
  };
}
,
  CheckMigrationNeeded: {
    template: function () { return exports.PreSettlementMigrationCoordinator; },
    choiceName: 'CheckMigrationNeeded',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckMigrationNeeded.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckMigrationNeeded.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.MigrationPlan.decoder; }),
    resultEncode: function (__typed__) { return exports.MigrationPlan.encode(__typed__); },
  },
  InitiateBatchMigration: {
    template: function () { return exports.PreSettlementMigrationCoordinator; },
    choiceName: 'InitiateBatchMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InitiateBatchMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.InitiateBatchMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(exports.SynchronizerMigrationRequest)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PreSettlementMigrationCoordinator; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PreSettlementMigrationCoordinator, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.FailMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({failureReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    failureReason: damlTypes.Text.encode(__typed__.failureReason),
  };
}
,
};



exports.CompleteMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationProof: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationProof: damlTypes.Text.encode(__typed__.migrationProof),
  };
}
,
};



exports.LockForMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.MigrationWorkflow = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:MigrationWorkflow',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requester: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, currentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, reason: damlTypes.Text.decoder, status: exports.MigrationStatus.decoder, initiatedAt: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    requester: damlTypes.Party.encode(__typed__.requester),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    currentSync: damlTypes.Text.encode(__typed__.currentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
    reason: damlTypes.Text.encode(__typed__.reason),
    status: exports.MigrationStatus.encode(__typed__.status),
    initiatedAt: damlTypes.Time.encode(__typed__.initiatedAt),
  };
}
,
  FailMigration: {
    template: function () { return exports.MigrationWorkflow; },
    choiceName: 'FailMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.FailMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.FailMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  CompleteMigration: {
    template: function () { return exports.MigrationWorkflow; },
    choiceName: 'CompleteMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CompleteMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.CompleteMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.HoldingSynchronizerMetadata)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.HoldingSynchronizerMetadata)).encode(__typed__); },
  },
  LockForMigration: {
    template: function () { return exports.MigrationWorkflow; },
    choiceName: 'LockForMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.LockForMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.LockForMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.MigrationWorkflow)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.MigrationWorkflow)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MigrationWorkflow; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MigrationWorkflow, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MigrationStatus = {
  MigrationPending: 'MigrationPending',
  MigrationInProgress: 'MigrationInProgress',
  MigrationCompleted: 'MigrationCompleted',
  MigrationFailed: 'MigrationFailed',
  keys: ['MigrationPending','MigrationInProgress','MigrationCompleted','MigrationFailed',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.MigrationStatus.MigrationPending), jtv.constant(exports.MigrationStatus.MigrationInProgress), jtv.constant(exports.MigrationStatus.MigrationCompleted), jtv.constant(exports.MigrationStatus.MigrationFailed)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.RejectMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rejectionReason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
  };
}
,
};



exports.ApproveMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.SynchronizerMigrationRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:SynchronizerMigrationRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requester: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, currentSync: damlTypes.Text.decoder, targetSync: damlTypes.Text.decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, deadline: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    requester: damlTypes.Party.encode(__typed__.requester),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    currentSync: damlTypes.Text.encode(__typed__.currentSync),
    targetSync: damlTypes.Text.encode(__typed__.targetSync),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
    deadline: damlTypes.Time.encode(__typed__.deadline),
  };
}
,
  ApproveMigration: {
    template: function () { return exports.SynchronizerMigrationRequest; },
    choiceName: 'ApproveMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.MigrationWorkflow).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.MigrationWorkflow).encode(__typed__); },
  },
  RejectMigration: {
    template: function () { return exports.SynchronizerMigrationRequest; },
    choiceName: 'RejectMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SynchronizerMigrationRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SynchronizerMigrationRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.CompatibilityResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({compatible: damlTypes.Bool.decoder, incompatibleContracts: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).decoder, recommendedAction: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    compatible: damlTypes.Bool.encode(__typed__.compatible),
    incompatibleContracts: damlTypes.List(damlTypes.ContractId(TokenStandard_Interfaces.Holding)).encode(__typed__.incompatibleContracts),
    recommendedAction: damlTypes.Optional(damlTypes.Text).encode(__typed__.recommendedAction),
  };
}
,
};



exports.CheckCompatibility = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.SynchronizerCompatibilityCheck = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:SynchronizerCompatibilityCheck',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({checker: damlTypes.Party.decoder, contracts: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).decoder, settlementId: damlTypes.Text.decoder, requiredSync: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    checker: damlTypes.Party.encode(__typed__.checker),
    contracts: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.Text)).encode(__typed__.contracts),
    settlementId: damlTypes.Text.encode(__typed__.settlementId),
    requiredSync: damlTypes.Text.encode(__typed__.requiredSync),
  };
}
,
  CheckCompatibility: {
    template: function () { return exports.SynchronizerCompatibilityCheck; },
    choiceName: 'CheckCompatibility',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckCompatibility.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckCompatibility.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.CompatibilityResult.decoder; }),
    resultEncode: function (__typed__) { return exports.CompatibilityResult.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.SynchronizerCompatibilityCheck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.SynchronizerCompatibilityCheck, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.UpdateAfterMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newSynchronizerInfo: exports.SynchronizerInfo.decoder, }); }),
  encode: function (__typed__) {
  return {
    newSynchronizerInfo: exports.SynchronizerInfo.encode(__typed__.newSynchronizerInfo),
  };
}
,
};



exports.GetSynchronizerInfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.HoldingSynchronizerMetadata = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.SynchronizerMigration:HoldingSynchronizerMetadata',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, assetId: damlTypes.Text.decoder, holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, synchronizerInfo: exports.SynchronizerInfo.decoder, canMigrate: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    assetId: damlTypes.Text.encode(__typed__.assetId),
    holdingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.holdingCid),
    synchronizerInfo: exports.SynchronizerInfo.encode(__typed__.synchronizerInfo),
    canMigrate: damlTypes.Bool.encode(__typed__.canMigrate),
  };
}
,
  GetSynchronizerInfo: {
    template: function () { return exports.HoldingSynchronizerMetadata; },
    choiceName: 'GetSynchronizerInfo',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetSynchronizerInfo.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetSynchronizerInfo.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.SynchronizerInfo.decoder; }),
    resultEncode: function (__typed__) { return exports.SynchronizerInfo.encode(__typed__); },
  },
  UpdateAfterMigration: {
    template: function () { return exports.HoldingSynchronizerMetadata; },
    choiceName: 'UpdateAfterMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateAfterMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateAfterMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HoldingSynchronizerMetadata).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HoldingSynchronizerMetadata).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HoldingSynchronizerMetadata; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HoldingSynchronizerMetadata, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.SynchronizerInfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({synchronizerId: damlTypes.Text.decoder, synchronizerUrl: damlTypes.Text.decoder, connectedAt: damlTypes.Time.decoder, lastVerified: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    synchronizerId: damlTypes.Text.encode(__typed__.synchronizerId),
    synchronizerUrl: damlTypes.Text.encode(__typed__.synchronizerUrl),
    connectedAt: damlTypes.Time.encode(__typed__.connectedAt),
    lastVerified: damlTypes.Time.encode(__typed__.lastVerified),
  };
}
,
};

