import { Component, OnInit,PipeTransform, Pipe} from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';



@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private g:DataService,private route:Router) { }


  y:any={};
  x:string;
  z:string;
  b:boolean;
  modalShow:boolean;
  video:string;
 

  ngOnInit() 
  {
    this.g.method3().subscribe(x=>this.y=x);
    this.b=false;
    this.modalShow=false;
  }
  change()
  {
   
    
    console.log(this.x);
    console.log(this.y);
    this.b=true;
    this.g.method1().subscribe(x=>this.x=x); 
    
  }
  test(a)
  {
   
    this.z="assets/"+this.x;
    this.video =this.z;
    console.log(this.z);
     console.log(a);
     this.g.method4(a).subscribe(res=>{
      if(res.msg=="valid")
      {
        this.modalShow=true;
       
       
        this.b=false;
        
      }
      else if(res.msg=="invalidp")
      {
        alert('invalidpassword');
      }
      else if(res.msg=="invalidu")
      {
        alert("invalid username")
      }
     })

  }

  change1()
  {
    this.route.navigate(["/regi"])
  }

  closeModal(){
    this.modalShow=false;
  }

}









export class AppComponent {
  title = 'app';

  


}
