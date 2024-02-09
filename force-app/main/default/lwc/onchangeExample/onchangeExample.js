import { LightningElement } from 'lwc';

export default class OnchangeExample extends LightningElement {

fullName;

handleChange(event){

    this.fullName = event.target.value;
}



}