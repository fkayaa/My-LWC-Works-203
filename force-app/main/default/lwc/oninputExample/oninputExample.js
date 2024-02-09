import { LightningElement } from 'lwc';

export default class OninputExample extends LightningElement {


    isim ="Sitrin";

    handleInput(event){

        this.isim = event.target.value;

        //this.template.querySelector.InnerHTML = this.isim; --->bu şekildede olurdu

        console.log("input değeri değişti");
    }

}