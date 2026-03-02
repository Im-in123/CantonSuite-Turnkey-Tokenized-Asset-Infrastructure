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

var pkg4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6 = require('@daml.js/daml-finance-interface-instrument-base-v4-4.0.0');
var pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b = require('@daml.js/daml-finance-interface-types-common-v3-3.0.0');
var pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 = require('@daml.js/daml-stdlib-DA-Set-Types-1.0.0');
var pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3 = require('@daml.js/daml-finance-interface-instrument-token-v4-4.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');
var pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4 = require('@daml.js/daml-finance-interface-util-v3-3.0.0');


exports.Instrument = damlTypes.assembleTemplate(
{
  templateId: '#daml-finance-instrument-token-v4:Daml.Finance.Instrument.Token.V4.Instrument:Instrument',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({depository: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id.decoder, version: damlTypes.Text.decoder, holdingStandard: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingStandard.decoder, description: damlTypes.Text.decoder, validAsOf: damlTypes.Time.decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    depository: damlTypes.Party.encode(__typed__.depository),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id.encode(__typed__.id),
    version: damlTypes.Text.encode(__typed__.version),
    holdingStandard: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingStandard.encode(__typed__.holdingStandard),
    description: damlTypes.Text.encode(__typed__.description),
    validAsOf: damlTypes.Time.encode(__typed__.validAsOf),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
  };
}
,
  Archive: {
    template: function () { return exports.Instrument; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

, pkg4498a831f345b46d372cc52ef2876fae36ddc246c434ff73bf38bd4892f840f6.Daml.Finance.Interface.Instrument.Base.V4.Instrument.Instrument
, pkge464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4.Daml.Finance.Interface.Util.V3.Disclosure.Disclosure
, pkgc264b287e2683d0a6be838e3abdfd0ca66ae36c2bfc07b2db6dbdf026d6099c3.Daml.Finance.Interface.Instrument.Token.V4.Instrument.Instrument
);


damlTypes.registerTemplate(exports.Instrument, ['332c97558616b4d4db3ab4ab9f306cc60b200dd4c8dcc72e06ab7e349b39c4ff', '#daml-finance-instrument-token-v4']);

