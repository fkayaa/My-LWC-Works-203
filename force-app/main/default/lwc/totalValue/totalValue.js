import { LightningElement } from 'lwc';

export default class TotalValue extends LightningElement {

  num1=5;
  num2=7;

  handleNum1(event){

   this.num1 = event.target.value;
        
  }
  handleNum2(event){

      this.num2 = event.target.value;

  }

  get total(){

      return Number(this.num1)+Number(this.num2);

  }

   // total = this.num1 + this.num2; // çalışmayabilir

}