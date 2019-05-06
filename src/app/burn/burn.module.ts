
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObliczComponent } from './oblicz/oblicz.component';
import { BrowserModule } from '@angular/platform-browser';
import { LinkiComponent } from './oblicz/linki/linki.component';
import { RouterLink } from '@angular/router';
import { MockComponent } from './oblicz/mock/mock.component';
import { FooterComponent } from './oblicz/footer/footer.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule, FormsModule,ReactiveFormsModule
  ],
  exports: [ObliczComponent,LinkiComponent,MockComponent,FooterComponent],
  declarations: [ObliczComponent,LinkiComponent, MockComponent, FooterComponent
  ]
})
export class BurnModule { }
