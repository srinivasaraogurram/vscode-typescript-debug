"use strict";

import { RequestKeys, DbKeys} from "./bulk-request";

export interface IAppSyncLmdaEventRecord {
  requestKeys: RequestKeys;
  dbKeys: DbKeys;
  actionData: any;
}
