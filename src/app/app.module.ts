import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { RequestOptions, BaseRequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { Configuration } from './config';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NewsService } from './service/news.service';

export class DefaultRequestOptions extends BaseRequestOptions {
  headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  withCredentials = true;
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule
    , HttpModule
    , RouterModule.forRoot( rootRouterConfig, { useHash: true } )
  ],
  providers: [
    { 
      provide: RequestOptions, useClass: DefaultRequestOptions 
    }
    , HttpService
    , NewsService
    , { 
      provide: 'CONFIG', useClass: Configuration
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
