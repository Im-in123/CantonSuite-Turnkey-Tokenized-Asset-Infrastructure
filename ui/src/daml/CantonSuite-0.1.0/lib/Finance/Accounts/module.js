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

var pkg336dbc9bf241a2050a74f89ce6d914232bf5b18ebd78765badbbd3c9e5d9c99b = require('@daml.js/daml-finance-account-v4-4.0.0');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.CreateAccount = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({accountOwner: damlTypes.Party.decoder, accountId: damlTypes.Text.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    accountOwner: damlTypes.Party.encode(__typed__.accountOwner),
    accountId: damlTypes.Text.encode(__typed__.accountId),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
};



exports.AccountFactory = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Finance.Accounts:AccountFactory',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  CreateAccount: {
    template: function () { return exports.AccountFactory; },
    choiceName: 'CreateAccount',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateAccount.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateAccount.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(pkg336dbc9bf241a2050a74f89ce6d914232bf5b18ebd78765badbbd3c9e5d9c99b.Daml.Finance.Account.V4.Account.Account).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(pkg336dbc9bf241a2050a74f89ce6d914232bf5b18ebd78765badbbd3c9e5d9c99b.Daml.Finance.Account.V4.Account.Account).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.AccountFactory; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.AccountFactory, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

