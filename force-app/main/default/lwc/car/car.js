import { LightningElement } from 'lwc';

export default class Car extends LightningElement {

engineModelValue;

    handleEngineChange(event){
 


        this.engineModelValue=event.target.value;
             
    }

}