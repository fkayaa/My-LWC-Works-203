import { LightningElement } from 'lwc';

export default class CreateAccount extends LightningElement {

success;

    handleSuccess(event){

this.success=" ✅ Create Successful , Id: " + event.detail.id;


    }


}
