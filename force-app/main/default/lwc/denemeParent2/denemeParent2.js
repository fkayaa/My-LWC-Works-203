import { LightningElement } from 'lwc';

export default class DenemeParent2 extends LightningElement {


    eventNames;

    handleButtonClicked(event){

      this.eventNames = event.detail.FirstName + ' ' + event.detail.LastName;


    }


}