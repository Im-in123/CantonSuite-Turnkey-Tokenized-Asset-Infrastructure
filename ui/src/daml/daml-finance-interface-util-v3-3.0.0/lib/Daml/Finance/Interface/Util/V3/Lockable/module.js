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

exports.Lockable = damlTypes.assembleInterface(
  'e464352c61da99134425511167a977c6cad6a71271a68ebd00c159fa1dfe8ad4:Daml.Finance.Interface.Util.V3.Lockable:Lockable',
  function () { return exports.View; },
  {
    GetView: {
      template: function () { return exports.Lockable; },
      choiceName: 'GetView',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.GetView.decoder; }),
      argumentEncode: function (__typed__) { return exports.GetView.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return exports.View.decoder; }),
      resultEncode: function (__typed__) { return exports.View.encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.Lockable; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
      argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    Acquire: {
      template: function () { return exports.Lockable; },
      choiceName: 'Acquire',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Acquire.decoder; }),
      argumentEncode: function (__typed__) { return exports.Acquire.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Lockable).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Lockable).encode(__typed__); },
    },
    Release: {
      template: function () { return exports.Lockable; },
      choiceName: 'Release',
      argumentDecoder: damlTypes.lazyMemo(function () { return exports.Release.decoder; }),
      argumentEncode: function (__typed__) { return exports.Release.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Lockable).decoder; }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Lockable).encode(__typed__); },
    },
  });



exports.Release = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({context: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    context: damlTypes.Text.encode(__typed__.context),
  };
}
,
};



exports.Acquire = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newLockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, context: damlTypes.Text.decoder, lockType: exports.LockType.decoder, }); }),
  encode: function (__typed__) {
  return {
    newLockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.newLockers),
    context: damlTypes.Text.encode(__typed__.context),
    lockType: exports.LockType.encode(__typed__.lockType),
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
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lock: damlTypes.Optional(exports.Lock).decoder, controllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    lock: damlTypes.Optional(exports.Lock).encode(__typed__.lock),
    controllers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.controllers),
  };
}
,
};



exports.Lock = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).decoder, context: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Text).decoder, lockType: exports.LockType.decoder, }); }),
  encode: function (__typed__) {
  return {
    lockers: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Party).encode(__typed__.lockers),
    context: pkg97b883cd8a2b7f49f90d5d39c981cf6e110cf1f1c64427a28a6d58ec88c43657.DA.Set.Types.Set(damlTypes.Text).encode(__typed__.context),
    lockType: exports.LockType.encode(__typed__.lockType),
  };
}
,
};



exports.LockType = {
  Semaphore: 'Semaphore',
  Reentrant: 'Reentrant',
  keys: ['Semaphore','Reentrant',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.LockType.Semaphore), jtv.constant(exports.LockType.Reentrant)); }),
  encode: function (__typed__) { return __typed__; },
};

