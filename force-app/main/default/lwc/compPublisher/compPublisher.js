import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from "lightning/navigation";
import { fireEvent } from "c/pubsubb";



export default class CompPublisher extends LightningElement {  

    @wire (CurrentPageReference) pageRef;
/*parametrelerde 
1-pageRef--> wire servisinde kullandıgımız variabledir,çalısılan sayfayı temsil eder

2-eventName--> evente verdiğimiz isimdir,istenilen isim yazılır-tırnak içerisinde,bu isim diğer componentta da aynen yazılır

3-payload--> html kısmında inputtan gelen degerdir,o da zaten "event.target.value" dur --aktarılacak veriyi içerir */




    //fonk içinde fonk olusturduk
     //input function içinde fireEvent() tanımlanır.
     
     //fireEvent()içinde parametreler tanımlanır


     handleChange(event){                                                                 
       

      fireEvent(this.pageRef , "publisher" , event.target.value);

       //1-yukarıda tanımladıgımız variabledir.--çalısılan sayfayı temsil eder
    //2-evente isim verdik tırnak içinde.--bu diğer componentta da yazılır
    //3-inputtan gelen deger-aktarılacak veriyi içerir(event.target.value dur) 

    }



}