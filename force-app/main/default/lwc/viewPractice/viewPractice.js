import { LightningElement } from 'lwc';
import CONTACT from "@salesforce/schema/Contact";
import FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import LASTNAME from "@salesforce/schema/Contact.LastName";



export default class ViewPractice extends LightningElement {

    objectName=  CONTACT;
    recordId= "0038e00000JjbLtAAJ";

    fields = {

        fName : FIRSTNAME,
        lName : LASTNAME
 

    }



}