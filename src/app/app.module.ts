import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory'
// modules
import { app_routing } from './app-routing';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// components
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './components/shared/header/header.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const http = httpLink.create({ uri: 'https://jimmytest.now.sh/api/reportgl' });
    
    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers:{
          "report-access-token": localStorage.getItem('token') || null
        }
      });
      return forward(operation);
    });

    apollo.create({
      link: authMiddleware.concat(http),
      cache: new InMemoryCache()
    });
  }
}