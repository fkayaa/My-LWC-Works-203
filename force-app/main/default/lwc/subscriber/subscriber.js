import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener } from 'c/pubsub';

export default class Subscriber extends LightningElement {
    showValue;

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){ // Bu function direkt çalışır. Publisher'daki handleChange gibi yazdık.
        // eventName, callback, thisArg
        registerListener("publishData", this.showDetails, this);
    }

    showDetails(data){
        this.showValue = data;
    }
}