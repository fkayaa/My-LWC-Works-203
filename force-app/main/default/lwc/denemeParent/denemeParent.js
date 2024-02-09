import { LightningElement } from 'lwc';

export default class DenemeParent extends LightningElement {


eventName;

parentFunction(event){

           this.eventName = event.detail;

}



}