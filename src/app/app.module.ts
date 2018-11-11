import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { ProfileComponent, SafePipe } from './profile/profile.component';
import{HttpClientModule} from '@angular/common/http';
import { RouteModule } from './route.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './search.pipe';
import { ShowdetailsComponent } from './showdetails/showdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    // FileSelectDirective,
  
    ProfileComponent,
    MainComponent,
    LoginComponent,
    SearchPipe,
    SafePipe,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
     FormsModule ,
     HttpClientModule,
     RouteModule,
     FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
