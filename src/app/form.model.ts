import { DecimalPipe } from '@angular/common';


export class UserModel {
  constructor(
    public quoteIdentifier: number,
    public quoteReference: string,
    public clientName: string,
    //note that for clientDOB I used string as using date didn't allow me to correctly display the date on the form during edit
    public clientDOB: string,
    public smokerStatus: boolean,
    public premiumAmount: number,
    public createdDate: Date
    
  ) { }
}
