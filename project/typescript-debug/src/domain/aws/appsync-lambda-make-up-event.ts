"use strict";

import { IAppSyncLmdaEventRecord } from "./appsync-lambda-event-record";
import { MakeUp} from "./bulk-request";


export interface IAppSyncLmdaMakeUpEvent {
  bulkRequest: IAppSyncLmdaEventRecord;
  makeup: MakeUp;
}
