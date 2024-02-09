import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {

   @track customer={
//object veya arraylerde yapılan değişiklik içerisine etki etmiyor,o yuzden  basına @track yazdık
        isim: "Fatma",


    }
    handleChange(event){

        this.customer.isim =event.target.value;

    }

}