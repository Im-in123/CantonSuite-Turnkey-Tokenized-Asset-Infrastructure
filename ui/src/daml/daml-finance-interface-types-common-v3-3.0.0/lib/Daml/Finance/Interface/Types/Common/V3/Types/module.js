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


exports.Quantity = function (u, a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unit: u.decoder, amount: a.decoder, }); }),
  encode: function (__typed__) {
  return {
    unit: u.encode(__typed__.unit),
    amount: a.encode(__typed__.amount),
  };
}
,
}); };



exports.InstrumentKey = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({depository: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, id: exports.Id.decoder, version: damlTypes.Text.decoder, holdingStandard: exports.HoldingStandard.decoder, }); }),
  encode: function (__typed__) {
  return {
    depository: damlTypes.Party.encode(__typed__.depository),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    id: exports.Id.encode(__typed__.id),
    version: damlTypes.Text.encode(__typed__.version),
    holdingStandard: exports.HoldingStandard.encode(__typed__.holdingStandard),
  };
}
,
};



exports.AccountKey = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({custodian: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, id: exports.Id.decoder, }); }),
  encode: function (__typed__) {
  return {
    custodian: damlTypes.Party.encode(__typed__.custodian),
    owner: damlTypes.Party.encode(__typed__.owner),
    id: exports.Id.encode(__typed__.id),
  };
}
,
};



exports.HoldingFactoryKey = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, id: exports.Id.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
    id: exports.Id.encode(__typed__.id),
  };
}
,
};



exports.HoldingStandard = {
  TransferableFungible: 'TransferableFungible',
  Transferable: 'Transferable',
  Fungible: 'Fungible',
  BaseHolding: 'BaseHolding',
  keys: ['TransferableFungible','Transferable','Fungible','BaseHolding',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.HoldingStandard.TransferableFungible), jtv.constant(exports.HoldingStandard.Transferable), jtv.constant(exports.HoldingStandard.Fungible), jtv.constant(exports.HoldingStandard.BaseHolding)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.Id = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unpack: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    unpack: damlTypes.Text.encode(__typed__.unpack),
  };
}
,
};

