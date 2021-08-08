"use strict";

import { ISqsLambdaEventRecord } from "./sqs-lambda-event-record";

export interface ISqsLambdaEvent {
  Records: ISqsLambdaEventRecord[];
}
