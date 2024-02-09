import { LightningElement, api } from 'lwc';

export default class SetterChild1 extends LightningElement {


calculatedAge;

   @api
   set customerAge(data){ //üzerinde değişiklik yapacagımız zaman set fonk kullanırız

  this.calculatedAge =  data*2;

 
   }


   get customerAge(){ //get ile return ederiz

    return this.calculatedAge;
  
   }

   //set ile düzenliyoruz,get ile değer döndürüyoruz
}