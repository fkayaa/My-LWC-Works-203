import { LightningElement, api, wire } from 'lwc';
import getAccounts from "@salesforce/apex/GetAccountsAndContacts.getChildAccounts";
import { NavigationMixin } from 'lightning/navigation'; // 1 - NavigationMixin'i import ediyoruz

export default class ChildAccounts extends NavigationMixin(LightningElement) { // 2 - NavigationMixin'a extends ediyoruz

    @api recordId; //içerisinde bulundugu sayfanın Id sini alır--recordId dememiz gerekiyor

    @wire(getAccounts, {parentAccId:"$recordId"}) childAccounts; //method cagırma

    goToAccount(event){ //buttondan gelen fonk
        let recId = event.target.name; // name attribute'ü üzerinden Id değerini alıyoruz.

        // 3 - NavigationMixin'i dökümantasyondan alıp kullanıyoruz
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recId,
                objectApiName: 'Account', // optional
                actionName: 'view', // "home" yazılırsa listview'a gider.
            },
        });
    }
}