
import { IAppSyncLmdaEvent } from "./domain/aws/appsync-lambda-cancel-event";
import { IAppSyncLmdaMakeUpEvent } from "./domain/aws/appsync-lambda-make-up-event";

export interface IGreeter {
    processTCACancelService(event: IAppSyncLmdaEvent): void;
    processTCAMakeUpService(event: IAppSyncLmdaMakeUpEvent): void;
}


export class Greeter implements IGreeter {
    greeting: string

    constructor(greeting: string) {
        this.greeting = greeting;
        console.log("this.greeting:" + this.greeting);
    }

    greet(name: string) {
        console.log(`${this.greeting} ${name}`);
    }

    processTCACancelService(event: IAppSyncLmdaEvent) {
        console.log("event:" + JSON.stringify(event, null, 4));
    }

    processTCAMakeUpService(event: IAppSyncLmdaMakeUpEvent): void {
        console.log("event:" + JSON.stringify(event, null, 4));
    }
    executeCodeBlock() {

        let regIds = ["0000d59516aa4774aa9bafb922cdea5c1", "0000d59516aa4774aa9bafb922cdea5c2", "0000d59516aa4774aa9bafb922cdea5c3", "0000d59516aa4774aa9bafb922cdea5c4"];
        let tcRegDataResponse = [
            {
                "educationLevelDescr": "11th Grade",
                "regUpdateTs": "2021-07-20T12:38:39.852Z",
                "registrationStatusCd": "1",
                "registrationStatusDescr": "Registered",
                "regCompletionTs": "2021-07-15T13:18:21.691Z",
                "asmtEventId": "1784",
                "regId": "0000d59516aa4774aa9bafb922cdea5c",
                "tcAdminGuid": "210808",
                "educationLevelCd": "6",
                "regNo": "1000160167"
            },
            {
                "educationLevelDescr": "11th Grade",
                "regUpdateTs": "2021-07-20T12:38:39.852Z",
                "registrationStatusCd": "0",
                "registrationStatusDescr": "Registered",
                "regCompletionTs": "2021-07-15T13:18:21.691Z",
                "asmtEventId": "1784",
                "regId": "0000d59516aa4774aa9bafb922cdea5c1",
                "tcAdminGuid": "210808",
                "educationLevelCd": "6",
                "regNo": "10001601671"
            },
            {
                "educationLevelDescr": "11th Grade",
                "regUpdateTs": "2021-07-20T12:38:39.852Z",
                "registrationStatusCd": "1",
                "registrationStatusDescr": "Registered",
                "regCompletionTs": "2021-07-15T13:18:21.691Z",
                "asmtEventId": "1784",
                "regId": "0000d59516aa4774aa9bafb922cdea5c2",
                "tcAdminGuid": "210808",
                "educationLevelCd": "6",
                "regNo": "10001601672"
            },
            {
                "educationLevelDescr": "11th Grade",
                "regUpdateTs": "2021-07-20T12:38:39.852Z",
                "registrationStatusCd": "1",
                "registrationStatusDescr": "Registered",
                "regCompletionTs": "2021-07-15T13:18:21.691Z",
                "asmtEventId": "1784",
                "regId": "0000d59516aa4774aa9bafb922cdea5c3",
                "tcAdminGuid": "210808",
                "educationLevelCd": "6",
                "regNo": "10001601673"
            }
        ];

        console.log("tcRegDataResponse:"+JSON.stringify(tcRegDataResponse, null, 2));
        const regIdsStatusResponse: any [] = [];
        console.log("regIds:"+ JSON.stringify(regIds))
        console.log("regIds length:"+  regIds.length)

       for(let regIdIndex = 0;  regIdIndex < regIds.length; regIdIndex ++)
       {
            console.log("regIdIndex:"+ regIdIndex +"regId:" +regIds[regIdIndex]);
             const regIdValidationStatus: any = {
               regId: regIds[regIdIndex],
               status: "RecordNotExists",
               valid: 0
             }
          for( let regDataIndex = 0; regDataIndex < tcRegDataResponse.length; regDataIndex ++)
          {
            console.log(`comparing regIdIndex:${regIdIndex} element: ${regIds[regIdIndex]} with regDataIndex: ${regDataIndex} element:${tcRegDataResponse[regDataIndex]}`);
            (regIds[regIdIndex] === tcRegDataResponse[regDataIndex].regId)?console.log("true"):console.log("false");
            if(regIds[regIdIndex] === tcRegDataResponse[regDataIndex].regId)
            {
                console.log("regIds[regIdIndex]:"+regIds[regIdIndex]);
                console.log("tcRegDataResponse[regDataIndex].regId:"+tcRegDataResponse[regDataIndex].regId);
                if (tcRegDataResponse[regDataIndex]?.registrationStatusCd === "1")
              {
                regIdValidationStatus.status = "RecordExistsAndRegistrationStatusIsTrue";
                regIdValidationStatus.valid ="1";
              }
             else if(tcRegDataResponse[regDataIndex]?.registrationStatusCd === "0")
              {
                regIdValidationStatus.status = "RecordExistsAndRegistrationStatusIsFalse";
                regIdValidationStatus.valid ="0";
              }
              else 
              {
                regIdValidationStatus.status = "RecordExistsAndRegistrationStatusIsFalse";
                regIdValidationStatus.valid ="0";
              }
              console.log("record found hence breaking the look.")
              break;
            }
          }
        }
    }
}