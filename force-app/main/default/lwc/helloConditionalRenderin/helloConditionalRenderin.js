import { LightningElement } from 'lwc';

export default class HelloConditionalRenderin extends LightningElement {
display=false;
    handleChange(event){

       this.display = event.target.checked;

    }


    display2 =false;


}