// Generated from Portfolio.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Allocation = {
  owner: damlTypes.Party;
  assetId: string;
  quantity: damlTypes.Numeric;
  issuer: damlTypes.Party;
};

export declare interface AllocationInterface {
  Archive: damlTypes.Choice<Allocation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Allocation.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Allocation, Allocation.Key>>;
}
export declare const Allocation:
  damlTypes.Template<Allocation, Allocation.Key, '#CantonSuite:Portfolio:Allocation'> &
  damlTypes.ToInterface<Allocation, never> &
  AllocationInterface;

export declare namespace Allocation {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<Allocation, Allocation.Key, typeof Allocation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Allocation, typeof Allocation.templateId>
  export type Event = damlLedger.Event<Allocation, Allocation.Key, typeof Allocation.templateId>
  export type QueryResult = damlLedger.QueryResult<Allocation, Allocation.Key, typeof Allocation.templateId>
}


