import { LightningElement } from 'lwc';

export default class DenemeChild2 extends LightningElement {

//2 inputtan gelen veriyi bir object yapısı içerisinde birleştirip,shallow copy yaparız yani copy sini olusturup gönderecegiz,denemeChild1 de object aslını gönderdik

copyObject;


eventObject={

        FirstName : ' ',
        LastName : ' '

}

handleFirst(event){

    this.eventObject.FirstName = event.detail.value;
}

handleLast(event){

    this.eventObject.LastName = event.detail.value;
}

//-----buraya kadar normal yazdık,şimdi shallow copy yapıyoruz------------//

handleClick(){

//önce object kopyası -sonra CustomEvent olustururz

//Shallow Copy budur.2 parametrenin ilki boş açılır
this.copyObject = Object.assign({},this.eventObject);
//eventObjecti {} e assigne eder,o boş süslü parantez copyObjecti temsil ediyor
//yani parantez içerisinde ikinci yazılan object,birinci yazılana assign edilir,o da atamanın solunda yer alan objecttir,copyObject'tir.c/arrayTrackPractice


const myEvent = new CustomEvent('clicked',{detail:this.copyObject});
this.dispatchEvent(myEvent);



}


}