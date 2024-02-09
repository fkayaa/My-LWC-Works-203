  import { LightningElement } from 'lwc';
import getAccounts from "@salesforce/apex/AccountController.getAccounts";

export default class CallApexImperatively extends LightningElement {
    filterWord;
    accounts;
    errors;

    getInputValue(event){
        this.filterWord = event.target.value;
    }

    handleGetAccounts(){
        getAccounts({filter: this.filterWord})
        .then(result => { // getAccounts methodunun return ettiği değeri result içine verdik.
            this.accounts = result;
        })
        .catch(error => {
            this.errors = error;
        })

        this.template.querySelector("form").reset();
  
    }
}