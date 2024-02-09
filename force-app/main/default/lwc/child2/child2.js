import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {

    inputValue;

    handleChange(event){
        this.inputValue = event.detail.value; // input'tan gelen veri parent'a gönderilecekse target yerine detail yazılır.
    }

    handleClick(){
        const myEvent2 = new CustomEvent("clicked2", {detail:this.inputValue});
        this.dispatchEvent(myEvent2);
    }
}