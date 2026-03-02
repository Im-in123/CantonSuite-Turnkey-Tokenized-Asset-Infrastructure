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
var pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3 = require('@daml.js/daml-finance-interface-instrument-token-v4-4.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');
var pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4 = require('@daml.js/daml-finance-interface-util-v3-3.0.0');


exports.Factory = damlTypes.assembleTemplate(
{
  templateId: '#daml-finance-instrument-token-v4:Daml.Finance.Instrument.Token.V4.Factory:Factory',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
  };
}
,
  Archive: {
    template: function () { return exports.Factory; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure
, pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3.Daml.Finance.Interface.Instrument.Token.V4.Factory.Factory
);


damlTypes.registerTemplate(exports.Factory, ['332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff', '#daml-finance-instrument-token-v4']);

