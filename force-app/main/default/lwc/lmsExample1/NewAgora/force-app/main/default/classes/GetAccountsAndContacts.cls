public class GetAccountsAndContacts {
    
    @AuraEnabled(cacheable=true)
    public static list<Account> getChildAccounts(Id parentAccId){
        
        
        return [Select Id,Name ,BillingStreet, BillingCity ,BillingState ,BillingCountry From Account Where parentId =: parentAccId];
        
        
    }
    
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(Id accId){
        
        
        return [Select Id,Name,MailingStreet, MailingCity,MailingState,MailingCountry From Contact Where AccountId =: accId];
        
        
    }

}