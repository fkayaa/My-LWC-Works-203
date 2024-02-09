import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class DeleteCase extends LightningElement {
    caseId;
    handleChange(event){
        this.caseId = event.target.value;
    }
    
    deleteCase(){
        deleteRecord(this.caseId) //standart methodtur,otomatik iportu kendisi getirdi,getirmezse biz yazarız
        .then(()=>{ //deleteRecord methodudur,basarı durumunda içeriye girer,içerisine arrow function yazdık ve show toast event objectini girdik
            let event = new ShowToastEvent({ //import ettik
                title: "Success",
                message: "Delete Operation successfull",
                variant: "success",
                mode: "pester"
            });
            this.dispatchEvent(event);

         this.template.querySelector("form").reset();   //form tagi basarılı old resetlenmesi için bu kısma yazıldı
    
        })
        .catch(()=>{ //deleteRecord methodudur,basarısız oldugunda içeriye girer.içerisine arrow function yazdık ve show toast event objectini girdik
            let event = new ShowToastEvent({ 
                title: "Error",
                message: "Delete Operation unsuccessfull",
                variant: "error",
                mode: "pester"
            });
            this.dispatchEvent(event);
        });
    }
}