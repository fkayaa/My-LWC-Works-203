import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {

    fistName;
    lastName;
    

    handlefName(event){

       this.firstName = event.target.value;
    }
    handlelName(event){

       this.lastName = event.target.value;
    }

    get fullName(){

        return (`${this.firstName} ${this.lastName}`).toUpperCase();


    }




}