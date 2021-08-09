'use strict';

export enum EnumMode {
    BATCH,
    TCA
}

export enum EnumAction {
    CANCEL,
    MAKEUP,
    REINSTATE,
    HOLD
}



// ===== domain object for process the Reg action.
// ===== input Reg data.
export class BulkRequest {
    public requestKeys: RequestKeys;
    public dbKeys: DbKeys;
    public actionData: any;  // child function provided specific to action.
}



export class RequestKeys {
    public action: string;  // enum
	public reason: string;  // list of reason for action
	public notify: string;
	public customer: string;
	public requestor: string;
	public requestDt: string;
	public mode: string;  // enum
    public note: string;  // future
}

export class DbKeys {
    public pk: string;  // BAT#1001, TCA#admin-200
    public sk: string;  // regId
    public requestKey: string; // REQ#1001
}

export class MakeUp {
    public regIds: Array<string>;
}


// ===== Reg action result
export class RegActionResult {
    public srcRequest: BulkRequest;
    public succeedInd: string;
    public exception: string;
    public processedTs: Date;
}