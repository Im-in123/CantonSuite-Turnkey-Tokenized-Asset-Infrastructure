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
var pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 = require('@daml.js/daml-stdlib-DA-Set-Types-1.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

exports.Disclosure = damlTypes.assembleInterface(
  'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Disclosure:Disclosure',
  function () { return exports.View; },
  {
    GetView: {
      template: function () { return exports.Disclosure; },
      choiceName: 'GetView',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetView.decoder; }),
      argumentEncode: function (__typed__) { return exports.GetView.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.View.decoder; }),
      resultEncode: function (__typed__) { return exports.View.encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.Disclosure; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    SetObservers: {
      template: function () { return exports.Disclosure; },
      choiceName: 'SetObservers',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.SetObservers.decoder; }),
      argumentEncode: function (__typed__) { return exports.SetObservers.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Disclosure).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Disclosure).encode(__typed__); },
    },
    AddObservers: {
      template: function () { return exports.Disclosure; },
      choiceName: 'AddObservers',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddObservers.decoder; }),
      argumentEncode: function (__typed__) { return exports.AddObservers.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Disclosure).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Disclosure).encode(__typed__); },
    },
    RemoveObservers: {
      template: function () { return exports.Disclosure; },
      choiceName: 'RemoveObservers',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.RemoveObservers.decoder; }),
      argumentEncode: function (__typed__) { return exports.RemoveObservers.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(damlTypes.ContractId(exports.Disclosure)).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Optional(damlTypes.ContractId(exports.Disclosure)).encode(__typed__); },
    },
  });



exports.RemoveObservers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, observersToRemove: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.disclosers),
    observersToRemove: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observersToRemove),
  };
}
,
};



exports.AddObservers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, observersToAdd: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.disclosers),
    observersToAdd: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observersToAdd),
  };
}
,
};



exports.SetObservers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, newObservers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    disclosers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.disclosers),
    newObservers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.newObservers),
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



exports.View = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({disclosureControllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    disclosureControllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.disclosureControllers),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
  };
}
,
};

