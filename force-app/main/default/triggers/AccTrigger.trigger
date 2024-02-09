trigger AccTrigger on Account (before insert,after insert,before update,after update,before delete,after delete,after undelete) {
    
    if(Trigger.isBefore){
        
        if(Trigger.isInsert){
            
            AccTriggerHandler.createAcc(Trigger.new);
        }
        
        if(Trigger.isUpdate){
            
            
        }
        if(Trigger.isDelete){
            
            
        }
        
        
        
    } 
    
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            
            
        }
        if(Trigger.isUpdate){
            
            
        }
        if(Trigger.isDelete){
            
            
        }
        if(Trigger.isUndelete){
            
            
        }
        
        
    } 
    
    
}