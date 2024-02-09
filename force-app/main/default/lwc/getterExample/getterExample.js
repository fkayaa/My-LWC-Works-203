import { LightningElement } from 'lwc';

export default class GetterExample extends LightningElement {

    num1=5;
    num2=7;
    nameList = ["Fatma","Melek","Zehra","Cengiz"];

    result=Number(this.num1)+Number(this.num2);
    result2=(this.num1/this.num2).toFixed(2);


    //Aritmetik işlemler
    get sum(){

    return    this.num1 + this.num2;
    }

    get substract(){

        return this.num1 - this.num2;
    }

    get divide(){

        return (this.num1/this.num2).toFixed(2);
    }

    get multiple(){

        return this.num1*this.num2;
    }

    //Array ilk ve son eleman alma :

   firstIndexValue =this.nameList[0];

   //get ile yapalım

   get IlkIndexValue(){

    return this.nameList[0];
   }

   //get ile son degeri alalım

   get lastIndexValue(){

    return this.nameList[this.nameList.length-1];
   }


   //array index from user

   index=0;
   handleBlur(event){

    this.index =event.target.value;
   }
    get nameIndexValue(){

         if(this.index>=0 && this.index<this.nameList.length){

            return this.nameList[this.index];


         }else {

            alert(`Lütfen 0'dan ${this.nameList.length} 'e  kadar kadar bir sayı giriniz.`);
         }



     
    }
}