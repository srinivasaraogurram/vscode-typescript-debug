"use strict";

import { IAppSyncLmdaEventRecord } from "./appsync-lambda-event-record";
import { Cancel} from "./bulk-request";


export interface IAppSyncLmdaEvent {
  bulkRequest: IAppSyncLmdaEventRecord;
  cancel: Cancel;
}
