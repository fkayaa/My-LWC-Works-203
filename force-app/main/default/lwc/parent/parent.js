import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    eventName1;
    eventName2;
eventName3;
    handleButtonClicked(){
        this.eventName1 = "Child1 buttona tıklandı. Parent'taki fonksiyon çalıştı."
    }

    handleButtonClicked2(event){
        this.eventName2 = event.detail;
    }
    handleButtonClicked3(event){


        this.eventName3 = event.detail.firstName + " " + event.detail.lastName;
    
    }
}