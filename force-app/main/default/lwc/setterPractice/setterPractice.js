import { LightningElement } from 'lwc';

export default class SetterPractice extends LightningElement {

    name="Cat";
    age=2;
    newAge;

    handleAge(event){

         this.newAge = Number(event.target.value);
         //inputtan gelen değer hemen age e atanmadı;age butona baglı olmalı ,o yuzden newAge propertysini kullanmalıyız
    }

    handleClick(){

           this.age1 = this.newAge;

           //butona basınca newAge de ki deger age1 e atanmıs oldu
    }

    set age1(value){ //set fonk sahip oldugu degeri parametresinde taşır.

      //age1 e gelen deger validetion controlu için conditiona baglandı,age1 ,value ya yüklendi
 if(value>0){

    this.age =value;

//value dan age e atandı 
 }else{
    alert("Lütfen Geçerli Bir Yaş Giriniz..");

 }


    }

    //aynı isimde hem get hem de set olusturabiliyoruz

    get age1(){

        return this.age + 1;

        
    }

//get te return vardır,sette parametre,get in degeri return ettiğindedir,set in degeri parametresindedir

    
}

//aynı isimde kullanılan get ve set methodları birlikte çalısır,set düzenler,get return eder