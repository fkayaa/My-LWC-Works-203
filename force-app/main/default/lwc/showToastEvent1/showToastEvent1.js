
import { LightningElement } from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class ShowToastEvent1 extends LightningElement {

    handleError(){
        let event = new ShowToastEvent({
            title: "Toast Error",
            message: "There is an error",
            variant: "error",
            mode: "dismissible"
        });
        this.dispatchEvent(event);
    }

    handleSuccess(){

        let event = new ShowToastEvent({
            title: "Toast Success",
            message: "Operation successfull",
            variant: "success",
            mode: "pester"
        });
        this.dispatchEvent(event);


    }

    handleWarn(){

        let event = new ShowToastEvent({
            title: "Toast Warning",
            message: "Operation may be unsuccessfull",
            variant: "warning",
            mode: "sticky"
        });
        this.dispatchEvent(event);


    }

    handleInfo(){

        let event = new ShowToastEvent({
            title: "Toast Info",
            message: "Loading,please wait...",
            variant: "info" //default deger infodur,yazmasakta info olur
            //mode un default degeri dismissible dır
           
        });
        this.dispatchEvent(event);

    }
}