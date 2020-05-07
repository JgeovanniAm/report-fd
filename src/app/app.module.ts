import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloLink, concat } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
// modules
import { app_routing } from './app-routing';
import { SharedModule } from './components/shared/shared.module';
import { MainModule } from './components/main/main.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// components
import { AppComponent } from './app.component';
// services without  

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    MainModule,
    SharedModule,
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
    const http = httpLink.create({ uri: '/api/reportgl' });
    
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

/**
 * 
    apollo.create({
      link: httpLink.create({uri:'/api/reportgl'}),
      cache: new InMemoryCache()
    });
  }
 */