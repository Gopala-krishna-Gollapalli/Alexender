import { Component, OnInit, OnChanges } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router'
import { DataService } from '../data.service';



const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnChanges {

  a:any;
  x:boolean;
  name:string;
  dob:string;
  gen:any;
  phno:any;
  pass:any;
  
  
  constructor(private http:HttpClient,private route:Router,private g:DataService){}

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
   
    this.x=false;
   
    
 }

 ngOnChanges(){
  console.log(this.a.phno);
  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
      
     
       




  
};
 }
 sub(a)
 {
  this.a=a;
  this.g.method7().subscribe(res=>console.log(res.msg));
  this.g.method5(this.a).subscribe(res=>{
    
    if(res.msg=="success"){
      alert('registration completed...');
     this.route.navigate(['/login']);
    }
    else{
      this.x=true;
    }
  });

  }
 

}
