  import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountController.getAccounts"; // 1- import ettik

export default class WireExample extends LightningElement {

    filterWord;


// 2- getAccounts metodunun return ettiği değeri accounts property'si içine attık. Inputtan gelen değeri filterWorld olarak parametreye verdik
 @wire(getAccounts, {filter:"$filterWord"}) accounts; //Apex'ten method çağırma, $ olmazsa name içinde filterWorld olanı arar, accounts içine object olarak gelir
    //gelen değer DATA ve ERROR olmak üzere iki şekilde gelir; 2 property
    //İşlem başarılı ise DATA içinde, hata varsa ERROR içinde gelir.

    getInputValue(event){
        this.filterWord = event.target.value;

        
        this.template.querySelector("form").reset();
    }

}   