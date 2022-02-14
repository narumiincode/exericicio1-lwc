import { LightningElement } from "lwc";

export default class App extends LightningElement {
    
    name = "Antonio Carlos transportes LTDA";
    phone = "(11) 1323-7788";
    email = "f@f.com";
    rating = "9.345.329,43"


    visible = true;


    alteraValores(){
        this.name = "ana do pão eireli";
        this.phone = "(44) 88998-87788";
        this.email = "ana@email.com";
        this.rating= "343.323,31"
  ;
    }
}