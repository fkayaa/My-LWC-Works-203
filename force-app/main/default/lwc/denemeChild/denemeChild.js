import { LightningElement } from 'lwc';

export default class DenemeChild extends LightningElement {

childValue;

inputChild(event){

    this.childValue = event.detail.value;
}

buttonChild(){

    let myEvent = new CustomEvent('clicked',{detail:this.childValue})
    this.dispatchEvent(myEvent);
}









}