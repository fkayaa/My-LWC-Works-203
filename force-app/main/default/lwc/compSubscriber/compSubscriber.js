import { LightningElement ,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener } from 'c/pubsubb';



export default class CompSubscriber extends LightningElement {
    ismiGöster;//ekrana bununla yazdıracagız

    @wire(CurrentPageReference) pageRef;//aynı sayfada çalısacaklar anlamı var



   //eventName, callback ,thisArg parametreleridir,aşagıdaki gibi olur--sırasıyla
   //"publisher" ,callback fonk extradan tanımlanır ,sadece-  this  -yazılır 
   //callback function tanımlanır,tanımladıgımız function ismi yerine yazılır,içerisinde ekrana yazılacak veriyi de gönderir,yani veriyi yakalar-tutar ve gönderir
   //thisArg --> baglanılacak degişkene atıfta bulunur,sadece this yazılır


    //lifecycle Hooks yardımcı fonk lardır,fonk olmadıgında kullanılır,Connected olanı kullanacagız 
connectedCallback(){ //bu fonk publisher daki handleChange yerine kullanılır,callback destek fonk larıdır
 
    registerListener (

        "publisher" , this.showDetails ,this

    )   


   }

   //callback fonksiyonu--gönderilen veriyi yakalar ve burdaki değişkene yükler

   showDetails(data){ //parametre olması gerekir,gelen degeri ordan tutar
      
       this.ismiGöster =data;

   }



}