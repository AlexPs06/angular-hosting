import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  formUnidades : FormGroup
  title = 'angular-hosting';
  Resultado=null;
  constructor(
    private formbuilder : FormBuilder,
    ) {
      this.formUnidades = this.formbuilder.group({
        Numero1 : [''],
        Numero2 : [''],
      })
     }
  ngOnInit (){

     }
  Suma(){
    let numero = this.formUnidades.get("Numero1").value;
    let numero2 =this.formUnidades.get("Numero2").value;
    this.Resultado= parseFloat(numero)+parseFloat(numero2);
    
  }
}
