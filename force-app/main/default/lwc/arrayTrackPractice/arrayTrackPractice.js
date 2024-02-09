import { LightningElement,track } from 'lwc';


export default class TrackArray extends LightningElement {

num;
sum;
@track numbers =[];
sum=0;

handleChange(event){

this.num =event.target.value;

}

handleClick(){

  this.numbers.push(this.num);
  this.sum += Number(this.num);
  this.template.querySelector("form").reset();
  

}   



}
  
  
