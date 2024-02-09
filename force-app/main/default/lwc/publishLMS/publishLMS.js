import { LightningElement } from 'lwc';
import {publish,createMessageContext} from "lightning/messageService";
import MyChannel from "@salesforce/messageChannel/MyMessageChannel__c";



export default class PublishLMS extends LightningElement {
myMessage;
context = createMessageContext(); 


handleChange(event){

    this.myMessage = event.target.value;
}

handleClick(){
let message = {

    messageToSend : this.myMessage,
    sourceSystem : "from PublishLMS"
}
    publish(this.context , MyChannel, message );

    
}



}