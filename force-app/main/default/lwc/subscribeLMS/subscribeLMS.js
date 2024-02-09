import { LightningElement } from 'lwc';
import {subscribe,createMessageContext} from "lightning/messageService";
import MyChannel from "@salesforce/messageChannel/MyMessageChannel__c";



export default class SubscribeLMS extends LightningElement {

    context = createMessageContext(); 


    receivedMessage;

connectedCallback(){

    subscribe(this.context ,MyChannel, (result)=>{

         this.receivedMessage = result.messageToSend + " " +result.sourceSystem;         

    });


}


}