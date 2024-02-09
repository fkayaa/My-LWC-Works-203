import { LightningElement } from 'lwc';
import CONTACT from "@salesforce/schema/Contact";
import FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import LASTNAME from "@salesforce/schema/Contact.LastName";
import ACCOUNTID from "@salesforce/schema/Contact.AccountId";
import EMAIL from "@salesforce/schema/Contact.Email";
import PHONE from "@salesforce/schema/Contact.Phone";

export default class ViewContact extends LightningElement {

    objectName = CONTACT;
    Id ="0038e00000JjbM0AAJ";
  

    fields = {

         fName : FIRSTNAME,
         lName : LASTNAME,
         accId : ACCOUNTID,
         Email : EMAIL,
         Phone : PHONE

    }



}