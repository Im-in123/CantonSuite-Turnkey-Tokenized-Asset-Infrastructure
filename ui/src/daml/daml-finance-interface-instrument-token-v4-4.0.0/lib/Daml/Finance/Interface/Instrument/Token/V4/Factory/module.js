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

var Daml_Finance_Interface_Instrument_Token_V4_Instrument = require('../../../../../../../Daml/Finance/Interface/Instrument/Token/V4/Instrument/module');
var Daml_Finance_Interface_Instrument_Token_V4_Types = require('../../../../../../../Daml/Finance/Interface/Instrument/Token/V4/Types/module');

exports.Factory = damlTypes.assembleInterface(
  'c264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3:Daml.Finance.Interface.Instrument.Token.V4.Factory:Factory',
  function () { return exports.View; },
  {
    Archive: {
      template: function () { return exports.Factory; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    Create: {
      template: function () { return exports.Factory; },
      choiceName: 'Create',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create.decoder; }),
      argumentEncode: function (__typed__) { return exports.Create.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Daml_Finance_Interface_Instrument_Token_V4_Instrument.Instrument).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(Daml_Finance_Interface_Instrument_Token_V4_Instrument.Instrument).encode(__typed__); },
    },
  });



exports.Create = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({token: Daml_Finance_Interface_Instrument_Token_V4_Types.Token.decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    token: Daml_Finance_Interface_Instrument_Token_V4_Types.Token.encode(__typed__.token),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
  };
}
,
};



exports.View = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
  };
}
,
};

