import { LightningElement} from 'lwc';

export default class EventParent extends LightningElement {

 button;
    handleClick(event){

   this.button = event.target.label;

    }

    handleClick2(){

        alert("Child buttona tıklandı.")
    }

   
handleClick3(){

    alert("Child button2 ye tıklandı")
}


   renderedCallback(){ //içindeki kodları sayfa yüklenince render eden özel bir LWC functionı,ortada kalınca bazı kodlar hata veriyor,vermesin diye içine yazdık

    this.template.querySelector("c-event-child1").addEventListener("click",this.handleClick3);

    //2.yol--daha kolay--ama tercih edilen child ı cagırdıgımız component içinde onclick={} şeklindeki kullanımdır.
    /*
    
    this.template.querySelector("c-event-child1").onclickc= this.handleClick3;


    */


   }

}