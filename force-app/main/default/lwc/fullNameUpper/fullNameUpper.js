import { LightningElement } from 'lwc';

export default class FullNameUpper extends LightningElement {
    fName = "John";
    lName = "conner";

    get fullName(){
        return (this.fName + " " + this.lName).toUpperCase();
     }

    //fullName = (this.fName + " " + this.lName).toUpperCase();
}