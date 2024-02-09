import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {



    handleClick(){

       alert("Child1 Button 2 ye tıklandı.Childtaki fonksiyon çalıştı")


    }
//1.buttona basınca çalısır
    handleClick1(){ //child 1 de bulunan htmlde button içindeki onclick eventinin tetiklediği functiondır


        const myEvent = new CustomEvent("clicked");//importa gerek yok--burda custom event olusturduk

        this.dispatchEvent(myEvent);
        //dispatch etmek gerekiyor

    }

}

//child html deki onclick tetiklenmesiyle;child js te custom event olusturduk,() içinde bir custom event ismi verdik,o ismi aldık;parent html de ki evente yazdık,ordaki event karsısında ki {} içindeki fonk tetikledi,o da parentın js inde çalısır,nokta atısı oldugu için diğer buttonları etkilemez,herkes kendi işini yapmıs olur,çünkü child componentta onclick kullanırsak ; her tıklamada tetikleniyor,tüm childı etkiliyor.

//hocanın notu;
// parent'taki çağırdığımız , child component'taki standard event olan onclick child'daki tüm buttonları görür -her tıklama eyleminde aktiflesir.
    // child'daki buttonlardan sadece birine nokta atışı parent'tan bir görev yüklemek istersek custom event kullanırız.


    //CustomEvent() objectinin instance ını olusturabiliyoruz,import etmeye gerek yok


    