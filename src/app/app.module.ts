import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './Interceptors/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './Interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
ToastrModule.forRoot({
  closeButton:true

}),
NgxSpinnerModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:GlobalInterceptor,
    multi:true
  },
    {provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
