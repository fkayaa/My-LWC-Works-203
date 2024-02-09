   import { LightningElement } from 'lwc';

export default class ForEach extends LightningElement {
    cityList = ["Mardin", "Erzincan", "Kars", "Van"];

    customerList = [
        {
         id:1,
         name: "Jim Carrey",
         phone: "+999 888 77 66",
         email: "jim@carrey.com",
         imgURL: "https://cdn.britannica.com/84/200584-050-7EC3F3F6/Jim-Carrey-2012.jpg"
        },
        {
          id:2,
          name: "Jack Bauer",
          phone: "+888 777 66 55",
          email: "jack@bauer.com",
          imgURL:
          "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        },
        {
          id:3,
          name: "Chuck Norris",
          phone: "+777 666 55 44",
          email: "chuck@norris.com",
          imgURL:
          "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        }
      ];
      

}