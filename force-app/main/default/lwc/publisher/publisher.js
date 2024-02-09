import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from "c/pubsub";

export default class Publisher extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    handleChange(event){
        // pageRef, eventName, payload
        fireEvent(this.pageRef, "publishData", event.target.value);
    }
}