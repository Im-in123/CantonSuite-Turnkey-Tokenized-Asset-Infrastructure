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

var pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b = require('@daml.js/daml-finance-interface-types-common-v3-3.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

exports.Holding = damlTypes.assembleInterface(
  '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Holding:Holding',
  function () { return exports.View; },
  {
    GetView: {
      template: function () { return exports.Holding; },
      choiceName: 'GetView',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetView.decoder; }),
      argumentEncode: function (__typed__) { return exports.GetView.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.View.decoder; }),
      resultEncode: function (__typed__) { return exports.View.encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.Holding; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });



exports.GetView = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({viewer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    viewer: damlTypes.Party.encode(__typed__.viewer),
  };
}
,
};



exports.View = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.decoder, account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.encode(__typed__.instrument),
    account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey.encode(__typed__.account),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};

