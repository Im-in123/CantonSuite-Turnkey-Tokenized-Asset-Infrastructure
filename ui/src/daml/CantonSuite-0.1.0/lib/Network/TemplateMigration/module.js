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
var TokenStandard_Interfaces = require('../../TokenStandard/Interfaces/module');


exports.ExecuteRollback = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.MigrationRollback = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:MigrationRollback',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationController: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, migrationReceipt: damlTypes.ContractId(exports.MigrationReceipt).decoder, backupData: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationController: damlTypes.Party.encode(__typed__.migrationController),
    owner: damlTypes.Party.encode(__typed__.owner),
    migrationReceipt: damlTypes.ContractId(exports.MigrationReceipt).encode(__typed__.migrationReceipt),
    backupData: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.backupData),
  };
}
,
  ExecuteRollback: {
    template: function () { return exports.MigrationRollback; },
    choiceName: 'ExecuteRollback',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteRollback.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteRollback.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MigrationRollback; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MigrationRollback, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MigrationProgress = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalContracts: damlTypes.Int.decoder, completedMigrations: damlTypes.Int.decoder, percentComplete: damlTypes.Numeric(10).decoder, remainingContracts: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    totalContracts: damlTypes.Int.encode(__typed__.totalContracts),
    completedMigrations: damlTypes.Int.encode(__typed__.completedMigrations),
    percentComplete: damlTypes.Numeric(10).encode(__typed__.percentComplete),
    remainingContracts: damlTypes.Int.encode(__typed__.remainingContracts),
  };
}
,
};



exports.GetMigrationProgress = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({totalContracts: damlTypes.Int.decoder, completedMigrations: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    totalContracts: damlTypes.Int.encode(__typed__.totalContracts),
    completedMigrations: damlTypes.Int.encode(__typed__.completedMigrations),
  };
}
,
};



exports.CreateBatchMigrationRequests = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({contractCids: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text)).decoder, }); }),
  encode: function (__typed__) {
  return {
    contractCids: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text)).encode(__typed__.contractCids),
  };
}
,
};



exports.BatchMigrationCoordinator = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:BatchMigrationCoordinator',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coordinator: damlTypes.Party.decoder, templateName: damlTypes.Text.decoder, oldVersion: damlTypes.Text.decoder, newVersion: damlTypes.Text.decoder, targetOwners: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    coordinator: damlTypes.Party.encode(__typed__.coordinator),
    templateName: damlTypes.Text.encode(__typed__.templateName),
    oldVersion: damlTypes.Text.encode(__typed__.oldVersion),
    newVersion: damlTypes.Text.encode(__typed__.newVersion),
    targetOwners: damlTypes.List(damlTypes.Party).encode(__typed__.targetOwners),
  };
}
,
  GetMigrationProgress: {
    template: function () { return exports.BatchMigrationCoordinator; },
    choiceName: 'GetMigrationProgress',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetMigrationProgress.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetMigrationProgress.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.MigrationProgress.decoder; }),
    resultEncode: function (__typed__) { return exports.MigrationProgress.encode(__typed__); },
  },
  CreateBatchMigrationRequests: {
    template: function () { return exports.BatchMigrationCoordinator; },
    choiceName: 'CreateBatchMigrationRequests',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateBatchMigrationRequests.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateBatchMigrationRequests.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(exports.MigrationRequest)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(exports.MigrationRequest)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BatchMigrationCoordinator; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BatchMigrationCoordinator, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MigrateInstrument = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RWAInstrumentMigrationV1toV2 = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:RWAInstrumentMigrationV1toV2',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, compliance: damlTypes.Party.decoder, oldInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).decoder, jurisdictions: damlTypes.List(damlTypes.Text).decoder, regulatoryFramework: damlTypes.Text.decoder, transferRestrictions: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    compliance: damlTypes.Party.encode(__typed__.compliance),
    oldInstrumentCid: damlTypes.ContractId(Finance_Instruments.RWAInstrument).encode(__typed__.oldInstrumentCid),
    jurisdictions: damlTypes.List(damlTypes.Text).encode(__typed__.jurisdictions),
    regulatoryFramework: damlTypes.Text.encode(__typed__.regulatoryFramework),
    transferRestrictions: damlTypes.List(damlTypes.Text).encode(__typed__.transferRestrictions),
  };
}
,
  MigrateInstrument: {
    template: function () { return exports.RWAInstrumentMigrationV1toV2; },
    choiceName: 'MigrateInstrument',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.MigrateInstrument.decoder; }),
    argumentEncode: function (__typed__) { return exports.MigrateInstrument.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Finance_Instruments.RWAInstrument), damlTypes.ContractId(exports.MigrationReceipt)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Finance_Instruments.RWAInstrument), damlTypes.ContractId(exports.MigrationReceipt)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RWAInstrumentMigrationV1toV2; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.RWAInstrumentMigrationV1toV2, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.AcknowledgeMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.MigrationReceipt = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:MigrationReceipt',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrator: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, templateName: damlTypes.Text.decoder, oldContractCid: damlTypes.Text.decoder, newContractCid: damlTypes.Text.decoder, oldVersion: damlTypes.Text.decoder, newVersion: damlTypes.Text.decoder, migratedAt: damlTypes.Time.decoder, preservedFields: damlTypes.List(damlTypes.Text).decoder, addedFieldNames: damlTypes.List(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    migrator: damlTypes.Party.encode(__typed__.migrator),
    owner: damlTypes.Party.encode(__typed__.owner),
    templateName: damlTypes.Text.encode(__typed__.templateName),
    oldContractCid: damlTypes.Text.encode(__typed__.oldContractCid),
    newContractCid: damlTypes.Text.encode(__typed__.newContractCid),
    oldVersion: damlTypes.Text.encode(__typed__.oldVersion),
    newVersion: damlTypes.Text.encode(__typed__.newVersion),
    migratedAt: damlTypes.Time.encode(__typed__.migratedAt),
    preservedFields: damlTypes.List(damlTypes.Text).encode(__typed__.preservedFields),
    addedFieldNames: damlTypes.List(damlTypes.Text).encode(__typed__.addedFieldNames),
  };
}
,
  AcknowledgeMigration: {
    template: function () { return exports.MigrationReceipt; },
    choiceName: 'AcknowledgeMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcknowledgeMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcknowledgeMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MigrationReceipt; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MigrationReceipt, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.ExecuteMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.HoldingMigrationV1toV2 = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:HoldingMigrationV1toV2',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrator: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, oldHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).decoder, addedFields: damlTypes.Map(damlTypes.Text, damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    migrator: damlTypes.Party.encode(__typed__.migrator),
    owner: damlTypes.Party.encode(__typed__.owner),
    oldHoldingCid: damlTypes.ContractId(TokenStandard_Interfaces.Holding).encode(__typed__.oldHoldingCid),
    addedFields: damlTypes.Map(damlTypes.Text, damlTypes.Text).encode(__typed__.addedFields),
  };
}
,
  ExecuteMigration: {
    template: function () { return exports.HoldingMigrationV1toV2; },
    choiceName: 'ExecuteMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ExecuteMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.ExecuteMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.MigrationReceipt)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(TokenStandard_Interfaces.Holding), damlTypes.ContractId(exports.MigrationReceipt)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HoldingMigrationV1toV2; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HoldingMigrationV1toV2, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



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



exports.MigrationRequest = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:MigrationRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationController: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, templateName: damlTypes.Text.decoder, oldVersion: damlTypes.Text.decoder, newVersion: damlTypes.Text.decoder, contractCid: damlTypes.Text.decoder, reason: damlTypes.Text.decoder, requestedAt: damlTypes.Time.decoder, status: exports.MigrationRequestStatus.decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationController: damlTypes.Party.encode(__typed__.migrationController),
    owner: damlTypes.Party.encode(__typed__.owner),
    templateName: damlTypes.Text.encode(__typed__.templateName),
    oldVersion: damlTypes.Text.encode(__typed__.oldVersion),
    newVersion: damlTypes.Text.encode(__typed__.newVersion),
    contractCid: damlTypes.Text.encode(__typed__.contractCid),
    reason: damlTypes.Text.encode(__typed__.reason),
    requestedAt: damlTypes.Time.encode(__typed__.requestedAt),
    status: exports.MigrationRequestStatus.encode(__typed__.status),
  };
}
,
  ApproveMigration: {
    template: function () { return exports.MigrationRequest; },
    choiceName: 'ApproveMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ApproveMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.ApproveMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.MigrationRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.MigrationRequest).encode(__typed__); },
  },
  RejectMigration: {
    template: function () { return exports.MigrationRequest; },
    choiceName: 'RejectMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MigrationRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MigrationRequest, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.MigrationRequestStatus = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('MigrationRequested'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('MigrationApproved'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('MigrationInProgress'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('MigrationCompleted'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('MigrationFailed'), value: damlTypes.Text.decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'MigrationRequested': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'MigrationApproved': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'MigrationInProgress': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'MigrationCompleted': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'MigrationFailed': return {tag: __typed__.tag, value: damlTypes.Text.encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type MigrationRequestStatus';
  }
}
,
};



exports.RequestMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, contractCid: damlTypes.Text.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    contractCid: damlTypes.Text.encode(__typed__.contractCid),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.NeedsMigration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({contractVersion: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    contractVersion: damlTypes.Text.encode(__typed__.contractVersion),
  };
}
,
};



exports.MigrationController = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:MigrationController',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({migrationController: damlTypes.Party.decoder, templateName: damlTypes.Text.decoder, oldVersion: damlTypes.Text.decoder, newVersion: damlTypes.Text.decoder, autoMigrate: damlTypes.Bool.decoder, notifyOwners: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    migrationController: damlTypes.Party.encode(__typed__.migrationController),
    templateName: damlTypes.Text.encode(__typed__.templateName),
    oldVersion: damlTypes.Text.encode(__typed__.oldVersion),
    newVersion: damlTypes.Text.encode(__typed__.newVersion),
    autoMigrate: damlTypes.Bool.encode(__typed__.autoMigrate),
    notifyOwners: damlTypes.Bool.encode(__typed__.notifyOwners),
  };
}
,
  NeedsMigration: {
    template: function () { return exports.MigrationController; },
    choiceName: 'NeedsMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.NeedsMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.NeedsMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Bool.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Bool.encode(__typed__); },
  },
  RequestMigration: {
    template: function () { return exports.MigrationController; },
    choiceName: 'RequestMigration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestMigration.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestMigration.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.MigrationRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.MigrationRequest).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.MigrationController; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.MigrationController, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.GetLatestVersion = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({templateName: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    templateName: damlTypes.Text.encode(__typed__.templateName),
  };
}
,
};



exports.DeprecateVersion = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({templateName: damlTypes.Text.decoder, versionNumber: damlTypes.Text.decoder, migrateBy: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    templateName: damlTypes.Text.encode(__typed__.templateName),
    versionNumber: damlTypes.Text.encode(__typed__.versionNumber),
    migrateBy: damlTypes.Time.encode(__typed__.migrateBy),
  };
}
,
};



exports.RegisterVersion = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newVersion: exports.TemplateVersion.decoder, }); }),
  encode: function (__typed__) {
  return {
    newVersion: exports.TemplateVersion.encode(__typed__.newVersion),
  };
}
,
};



exports.TemplateRegistry = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Network.TemplateMigration:TemplateRegistry',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({registry: damlTypes.Party.decoder, versions: damlTypes.List(exports.TemplateVersion).decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    registry: damlTypes.Party.encode(__typed__.registry),
    versions: damlTypes.List(exports.TemplateVersion).encode(__typed__.versions),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  DeprecateVersion: {
    template: function () { return exports.TemplateRegistry; },
    choiceName: 'DeprecateVersion',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DeprecateVersion.decoder; }),
    argumentEncode: function (__typed__) { return exports.DeprecateVersion.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TemplateRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TemplateRegistry).encode(__typed__); },
  },
  GetLatestVersion: {
    template: function () { return exports.TemplateRegistry; },
    choiceName: 'GetLatestVersion',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetLatestVersion.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetLatestVersion.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(exports.TemplateVersion).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Optional(exports.TemplateVersion).encode(__typed__); },
  },
  RegisterVersion: {
    template: function () { return exports.TemplateRegistry; },
    choiceName: 'RegisterVersion',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RegisterVersion.decoder; }),
    argumentEncode: function (__typed__) { return exports.RegisterVersion.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TemplateRegistry).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TemplateRegistry).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TemplateRegistry; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.TemplateRegistry, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);



exports.TemplateVersion = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({templateName: damlTypes.Text.decoder, version: damlTypes.Text.decoder, deployedAt: damlTypes.Time.decoder, changeLog: damlTypes.List(damlTypes.Text).decoder, deprecated: damlTypes.Bool.decoder, migrateByDate: damlTypes.Optional(damlTypes.Time).decoder, }); }),
  encode: function (__typed__) {
  return {
    templateName: damlTypes.Text.encode(__typed__.templateName),
    version: damlTypes.Text.encode(__typed__.version),
    deployedAt: damlTypes.Time.encode(__typed__.deployedAt),
    changeLog: damlTypes.List(damlTypes.Text).encode(__typed__.changeLog),
    deprecated: damlTypes.Bool.encode(__typed__.deprecated),
    migrateByDate: damlTypes.Optional(damlTypes.Time).encode(__typed__.migrateByDate),
  };
}
,
};

