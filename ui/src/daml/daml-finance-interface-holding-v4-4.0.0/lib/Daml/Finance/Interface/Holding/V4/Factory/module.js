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
var pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657 = require('@daml.js/daml-stdlib-DA-Set-Types-1.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Daml_Finance_Interface_Holding_V4_Holding = require('../../../../../../Daml/Finance/Interface/Holding/V4/Holding/module');

exports.Factory = damlTypes.assembleInterface(
  '49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e:Daml.Finance.Interface.Holding.V4.Factory:Factory',
  function () { return exports.View; },
  {
    Remove: {
      template: function () { return exports.Factory; },
      choiceName: 'Remove',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Remove.decoder; }),
      argumentEncode: function (__typed__) { return exports.Remove.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    Create: {
      template: function () { return exports.Factory; },
      choiceName: 'Create',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create.decoder; }),
      argumentEncode: function (__typed__) { return exports.Create.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Daml_Finance_Interface_Holding_V4_Holding.Holding).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(Daml_Finance_Interface_Holding_V4_Holding.Holding).encode(__typed__); },
    },
    GetView: {
      template: function () { return exports.Factory; },
      choiceName: 'GetView',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetView.decoder; }),
      argumentEncode: function (__typed__) { return exports.GetView.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.View.decoder; }),
      resultEncode: function (__typed__) { return exports.View.encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.Factory; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  });



exports.SetObservers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newObservers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    newObservers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.newObservers),
  };
}
,
};



exports.SetCid = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newCid: damlTypes.ContractId(exports.Factory).decoder, }); }),
  encode: function (__typed__) {
  return {
    newCid: damlTypes.ContractId(exports.Factory).encode(__typed__.newCid),
  };
}
,
};



exports.GetCid = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({viewer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    viewer: damlTypes.Party.encode(__typed__.viewer),
  };
}
,
};



exports.Reference = damlTypes.assembleTemplate(
{
  templateId: '#daml-finance-interface-holding-v4:Daml.Finance.Interface.Holding.V4.Factory:Reference',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingFactoryKey.decoder; }); }),
  keyEncode: function (__typed__) { return pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.HoldingFactoryKey.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({factoryView: exports.View.decoder, cid: damlTypes.ContractId(exports.Factory).decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    factoryView: exports.View.encode(__typed__.factoryView),
    cid: damlTypes.ContractId(exports.Factory).encode(__typed__.cid),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
  };
}
,
  SetCid: {
    template: function () { return exports.Reference; },
    choiceName: 'SetCid',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SetCid.decoder; }),
    argumentEncode: function (__typed__) { return exports.SetCid.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Reference).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Reference).encode(__typed__); },
  },
  SetObservers: {
    template: function () { return exports.Reference; },
    choiceName: 'SetObservers',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SetObservers.decoder; }),
    argumentEncode: function (__typed__) { return exports.SetObservers.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Reference).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Reference).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Reference; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  GetCid: {
    template: function () { return exports.Reference; },
    choiceName: 'GetCid',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetCid.decoder; }),
    argumentEncode: function (__typed__) { return exports.GetCid.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Factory).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Factory).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Reference, ['49a7fd6a0515033677fd779be46379bc2b59a88fc9926a139cc55c4d6a79607e', '#daml-finance-interface-holding-v4']);



exports.Remove = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Create = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.decoder, account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey.decoder, amount: damlTypes.Numeric(10).decoder, observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    instrument: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.InstrumentKey.encode(__typed__.instrument),
    account: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.AccountKey.encode(__typed__.account),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    observers: damlTypes.Map(damlTypes.Text, pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party)).encode(__typed__.observers),
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
    id: pkg5de7a873f7553660cc044111cb899879a34580e7e74cea3868094f071a5bd94b.Daml.Finance.Interface.Types.Common.V3.Types.Id.encode(__typed__.id),
  };
}
,
};

