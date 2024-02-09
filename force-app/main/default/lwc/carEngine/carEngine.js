import { LightningElement, api } from 'lwc'; //asagıda @api dediğimizde otomatik buraya da gelir,gelmezse elle yazılır,yoksa görülmez

export default class CarEngine extends LightningElement {


   @api engineModel ="3.0 Turbo"; /* @api --> public demek;parenttan deger verilir demektir*/ 
 // 1 - Parent'tan değer verebilmek için variable'ı @api ile decorate ederiz.
}