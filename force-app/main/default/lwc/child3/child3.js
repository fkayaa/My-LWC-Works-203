import { LightningElement } from 'lwc';

export default class Child3 extends LightningElement {


    eventObject ={}

    handleName(event){

this.eventObject.firstName =event.detail.value;



    }

    handleSurname(event){

        this.eventObject.lastName =event.detail.value;
       
    }
    handleClick(){
//---------------------------
        //2.yol object kopyası da yapılabilir
        this.copyObject = Object.assign({}, this.eventObject);
//-----------------------------

        const myEvent3 = new CustomEvent("clicked3", {detail:this.eventObject});
        this.dispatchEvent(myEvent3);
    }



}