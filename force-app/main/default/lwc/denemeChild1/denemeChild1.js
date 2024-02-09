import { LightningElement } from 'lwc';

export default class DenemeChild1 extends LightningElement {

eventObject = {};

handleFirst(event){

    this.eventObject.FirstName = event.detail.value;
}

handleLast(event){

    this.eventObject.LastName = event.detail.value;
}

handleClick(){
  
       let myEvent = new CustomEvent('clicked',{detail:this.eventObject})
       this.dispatchEvent(myEvent);

}




}