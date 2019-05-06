import { BurnModule } from './burn/burn.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './burn/oblicz/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BurnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
