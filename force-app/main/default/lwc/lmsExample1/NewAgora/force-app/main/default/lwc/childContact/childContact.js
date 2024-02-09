import { LightningElement, api, wire } from 'lwc';
import getContact from "@salesforce/apex/GetAccountsAndContacts.getContacts";
import { NavigationMixin } from 'lightning/navigation';

export default class ChildContact extends NavigationMixin(LightningElement) {


@api accId;

@wire (getContact ,{accId : "$accId"}) contacts;


goToContact(event){

    let recId = event.target.name;

    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {

            recordId: recId,
            objectApiName: 'Contact', //optional
            actionName: 'view',
        },
    });




}





}