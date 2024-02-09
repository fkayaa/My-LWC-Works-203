public class AccTriggerHandler {
    
    
    public static void createAcc(list<Account> acList){
        
        //List<Account> listAcc = new List<Account>();
        
        
        for(Account ac : acList){
            
            if(ac.Rating==Null){
                
                     ac.Rating='Cold';                                                                         // ac.addError('Rating bos bırakılamaz.');
                
                                                                                             //ac.Rating='Cold';       //----> ac.Rating.add('Hot');     //  ac.addError('....');  
                
            }
            
        }
        
    } // createAcc metot bitiş
    

        
        
        
        
    
    
    

}