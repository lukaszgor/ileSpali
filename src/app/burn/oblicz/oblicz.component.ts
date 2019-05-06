
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-oblicz',
  templateUrl: './oblicz.component.html',
  styleUrls: ['./oblicz.component.css']
})
export class ObliczComponent implements OnInit {
ilespala: number;
cena: number;
trasa: number;
ludzie: number;
ilespali: number;
allprice: number;
priceoneperson:number;
// tslint:disable-next-line:no-inferrable-types





wynik = 123;

  constructor(private formBuilder :FormBuilder) { }

  ngOnInit() {
  }

allCost(){

  this.ilespali= (this.ilespala*this.trasa)/100;
this.allprice=+this.cena *this.ilespali;
this.priceoneperson=+this.allprice/this.ludzie;

}

rest(){
this.ilespali=null;
this.allprice=null;
this.priceoneperson=null;
}


}
