import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { app_routing } from './app-routing';
import { SharedModule } from './components/shared/shared.module';
import { MainModule } from './components/main/main.module';
import  { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
// services

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    MainModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
