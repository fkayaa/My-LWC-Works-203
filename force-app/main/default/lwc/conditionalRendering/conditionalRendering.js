import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag = false;


    display =false;
    handleChange(event){

   this.display =  event.target.checked; //checkbox larda değer checked diye alınır
    }
}