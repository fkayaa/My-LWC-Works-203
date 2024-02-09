public with sharing class AccountController {

    @AuraEnabled(cacheable=true) //bu methodu kullanmak için public ve bu ifadeyi kullanmamız gerekir.LWC den erişim saglamıs olduk
        public static List<Account> getAccounts(String filter){

 
              return [SELECT Name,Industry FROM Account WHERE Name LIKE :('%'+ filter + '%')]; //WITH SECURITY_ENFORCED --> sarı  çizgi olursa ,security izinleri ile ilgilidir,query sonuna bu yazılabilir


        } 

}

