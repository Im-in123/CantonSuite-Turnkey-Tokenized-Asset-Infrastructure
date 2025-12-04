// Generated from Users.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Types from '../Types/module';

export declare type User = {
  partyId: damlTypes.Party;
  name: string;
  email: string;
  role: Types.Role;
};

export declare interface UserInterface {
  Archive: damlTypes.Choice<User, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<User, undefined>>;
}
export declare const User:
  damlTypes.Template<User, undefined, '#CantonSuite:Users:User'> &
  damlTypes.ToInterface<User, never> &
  UserInterface;

export declare namespace User {
  export type CreateEvent = damlLedger.CreateEvent<User, undefined, typeof User.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<User, typeof User.templateId>
  export type Event = damlLedger.Event<User, undefined, typeof User.templateId>
  export type QueryResult = damlLedger.QueryResult<User, undefined, typeof User.templateId>
}


