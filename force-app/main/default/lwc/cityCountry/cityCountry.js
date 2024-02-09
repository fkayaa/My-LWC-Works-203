import { LightningElement } from 'lwc';

export default class CityCountry extends LightningElement {

country;
city;
famous;

   ülke(event){

    this.country=event.target.value;

   }
   sehir(event){
    this.city =event.target.value;

   }
   ünlüsü(event){

    this.famous =event.target.value;

   }
    


}