import { LightningElement,track } from 'lwc';

export default class TrackArray extends LightningElement {

num;
@track numbers =[];

handleChange(event){

this.num =event.target.value;
}

handleClick(){

  this.numbers.push(this.num);//push atamadır.num ı numbers a atadık
  this.template.querySelector("form").reset();
}

}