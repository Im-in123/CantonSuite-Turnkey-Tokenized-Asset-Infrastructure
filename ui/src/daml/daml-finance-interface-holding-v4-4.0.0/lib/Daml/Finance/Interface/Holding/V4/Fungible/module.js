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

var pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 = require('@daml.js/daml-stdlib-DA-Set-Types-1.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

exports.Fungible = damlTypes.assembleInterface(
  '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Fungible:Fungible',
  function () { return exports.View; },
  {
    GetView: {
      template: function () { return exports.Fungible; },
      choiceName: 'GetView',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetView.decoder; }),
      argumentEncode: function (__typed__) { return exports.GetView.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.View.decoder; }),
      resultEncode: function (__typed__) { return exports.View.encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.Fungible; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    Split: {
      template: function () { return exports.Fungible; },
      choiceName: 'Split',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Split.decoder; }),
      argumentEncode: function (__typed__) { return exports.Split.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.SplitResult.decoder; }),
      resultEncode: function (__typed__) { return exports.SplitResult.encode(__typed__); },
    },
    Merge: {
      template: function () { return exports.Fungible; },
      choiceName: 'Merge',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Merge.decoder; }),
      argumentEncode: function (__typed__) { return exports.Merge.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Fungible).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Fungible).encode(__typed__); },
    },
  });



exports.Merge = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({fungibleCids: damlTypes.List(damlTypes.ContractId(exports.Fungible)).decoder, }); }),
  encode: function (__typed__) {
  return {
    fungibleCids: damlTypes.List(damlTypes.ContractId(exports.Fungible)).encode(__typed__.fungibleCids),
  };
}
,
};



exports.Split = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amounts: damlTypes.List(damlTypes.Numeric(10)).decoder, }); }),
  encode: function (__typed__) {
  return {
    amounts: damlTypes.List(damlTypes.Numeric(10)).encode(__typed__.amounts),
  };
}
,
};



exports.GetView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({viewer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    viewer: damlTypes.Party.encode(__typed__.viewer),
  };
}
,
};



exports.SplitResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({splitCids: damlTypes.List(damlTypes.ContractId(exports.Fungible)).decoder, rest: damlTypes.Optional(damlTypes.ContractId(exports.Fungible)).decoder, }); }),
  encode: function (__typed__) {
  return {
    splitCids: damlTypes.List(damlTypes.ContractId(exports.Fungible)).encode(__typed__.splitCids),
    rest: damlTypes.Optional(damlTypes.ContractId(exports.Fungible)).encode(__typed__.rest),
  };
}
,
};



exports.View = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({modifiers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    modifiers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.modifiers),
  };
}
,
};

