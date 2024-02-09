import { LightningElement,track } from 'lwc';
import { publish,subscribe,unsubscribe,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/MyMessageChannel__c";

export default class LMCWebComponentDemo extends LightningElement {
    @track receivedMessage = '';
    @track myMessage = '';
    subscription = null;
    context = createMessageContext();

    constructor() {
        super();
    }

    handleChange(event) {
        this.myMessage = event.target.value;
    }

    publishMC() {
        const message = {
            messageToSend: this.myMessage,
            sourceSystem: "From LWC"
        };
        publish(this.context, SAMPLEMC, message);
    }

    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.displayMessage(message);
        });
     }
 
     unsubscribeMC() {
         unsubscribe(this.subscription);
         this.subscription = null;
     }

     displayMessage(message) {
         this.receivedMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
     }

     disconnectedCallback() {
         releaseMessageContext(this.context);
     }

}