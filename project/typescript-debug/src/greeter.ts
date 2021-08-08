
import { IAppSyncLmdaEvent } from "../src/domain/aws/appsync-lambda-event";

export interface IGreeter {
    processTCAMakeUpService(event: IAppSyncLmdaEvent): void;
}


export class Greeter implements IGreeter{
    greeting: string

    constructor(greeting: string)
    {
        this.greeting = greeting;
        console.log("this.greeting:"+ this.greeting);
    }
    
    greet(name: string)
    {
        console.log(`${this.greeting} ${name}`);
    }

    processTCAMakeUpService(event: IAppSyncLmdaEvent)
    {
        console.log("event:"+ JSON.stringify(event, null, 4));
    }
}