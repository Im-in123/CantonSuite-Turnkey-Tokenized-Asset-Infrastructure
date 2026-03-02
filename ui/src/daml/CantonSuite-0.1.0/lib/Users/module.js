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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Types = require('../Types/module');


exports.UpdateProfile = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newName: damlTypes.Text.decoder, newEmail: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    newName: damlTypes.Text.encode(__typed__.newName),
    newEmail: damlTypes.Text.encode(__typed__.newEmail),
  };
}
,
};



exports.User = damlTypes.assembleTemplate(
{
  templateId: '#CantonSuite:Users:User',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({partyId: damlTypes.Party.decoder, name: damlTypes.Text.decoder, email: damlTypes.Text.decoder, role: Types.Role.decoder, }); }),
  encode: function (__typed__) {
  return {
    partyId: damlTypes.Party.encode(__typed__.partyId),
    name: damlTypes.Text.encode(__typed__.name),
    email: damlTypes.Text.encode(__typed__.email),
    role: Types.Role.encode(__typed__.role),
  };
}
,
  Archive: {
    template: function () { return exports.User; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  UpdateProfile: {
    template: function () { return exports.User; },
    choiceName: 'UpdateProfile',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateProfile.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateProfile.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.User).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.User).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.User, ['7b9176e372f3c95da11f9bf2f97adcba36185c02c3dea45b575c34d340321f53', '#CantonSuite']);

