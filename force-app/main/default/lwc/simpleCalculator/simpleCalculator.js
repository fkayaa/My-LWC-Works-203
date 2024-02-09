import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    showValue=false;
    result=0;
    num1;
    num2;
   @track oldValues = [];
//aynı fonk ları conditionlarla ayırdık

   //1-inputların değerleri alınır

    getNumber(event){

           if(event.target.label== "Number 1"){

            this.num1 =event.target.value;

                  
           }

           else {

             this.num2 =event.target.value;

           }
    }
//2-Butonlara basınca gerekli işlemleri yapacak funtions tanımlıyoruz 
    calculate(event){

        if(event.target.label == "Toplama"){

           this.result = Number(this.num1)+Number(this.num2)

           this.oldValues.push(this.result);   

        }

        else if(event.target.label == "Çıkarma"){

            this.result =  Number(this.num1)-Number(this.num2)
            this.oldValues.push(this.result);
        }

        else if(event.target.label == "Çarpma"){

            this.result = Number(this.num1)*Number(this.num2)
            this.oldValues.push(this.result);
        }

        else{

            this.result = (Number(this.num1)/Number(this.num2)).toFixed(2);
            this.oldValues.push(this.result);
        }
    }
//3-checkbox değerini alıyoruz
    handleCheckbox(event){

     this.showValue = event.target.checked;



    }





}