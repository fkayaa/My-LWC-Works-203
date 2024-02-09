     import { LightningElement } from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class ShowToastCombobox extends LightningElement {

    _title = "Örnek Başlık";  /* default value verdik,deger vermeden sadece tanımlayabilirdik. */
    _message = "Örnek Mesaj"; /* bu property leri this. da kullanıp ,girilen degerleri dynamic olarak alacagız */
    _variant = "error";

    variantOptions = [  /*picklist degerlerini verdik,array olarak,objectlerden olusan bir array veriyoruz,hem label hem value'su olması gerekir,object olarak verecegimiz için her birini süslü parantezle verdik,mesela label ı warn ama arka planda warning variantını tetiklemesi gerekir  */ 
        {label: "Error", value: "error"},  
        {label: "Success", value: "success"},
        {label: "Warn", value: "warning"},
        {label: "Info", value: "info"}
    ];

    titleChange(event){
        this._title = event.target.value;
    }

    messageChange(event){
        this._message = event.target.value;
    }

    variantChange(event){
        this._variant = event.target.value;
    }

    showToastNotification(){ /* buttondaki onclick eventinden gelen function içine yukarıda import ettiğimiz objectin instance nı olusturp,objectimizi tanımlarız */
        var event = new ShowToastEvent({ /*instance parantezi içerisinde {} içinde title,message,variant ve mode labelları tanımlanır */
            title: this._title,
            message: this._message,
            variant: this._variant
        });
        this.dispatchEvent(event); /*bununla aktiflestiririz,dml gibi */
    }
}