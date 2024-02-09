import { LightningElement } from 'lwc';
import Contact from "@salesforce/schema/Contact";
import FirstName from "@salesforce/schema/Contact.FirstName";
import LastName from "@salesforce/schema/Contact.LastName";
import AccountId from "@salesforce/schema/Contact.AccountId";
import Email from "@salesforce/schema/Contact.Email";
import Phone from "@salesforce/schema/Contact.Phone";
import Department from "@salesforce/schema/Contact.Department";
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class UpdateContact extends LightningElement {
    recordId = "0038e00000JjbLtAAJ";
    objectName = Contact; //variable oldugu için tırnaksız yazdık
    fields = [FirstName, LastName, AccountId, Email, Phone, Department]; //variable oldukları için ,tırnaksız yazdık,birden fazla field gelecek,o yüzden arraydir

    handleSuccess(){ //Başarı mesajı için onsuccess eventi tetiklendi.basarı mesajını baska yerden kopyalayabiliriz.koyalanan kısım,object kısmı
        let event = new ShowToastEvent({ //import ettik,standat fonk oldugu için import ederken süslü paranteze alınır ve @ isareti yoktur tırnaklı kısımda
            title:"Success", 
            message:"Updated Successfull",
            variant:"success",
            mode:"dismissible"
        });
        this.dispatchEvent(event); //bu kısımda bu işlemi yapmazsak bu object görünmez
    }
}