import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private g:DataService) { }

  phno:any;
  password1:any;
  s:any;

  ngOnInit() {
  }
  test(a)
  {
    console.log(a);
    
    this.g.method2(a).subscribe(res=>{
      if(res.msg=="valid")
      {
        
        this.router.navigate(["/profile"])
      }
      else if(res.msg=="invalidp")
      {
        alert('invalidpassword');
      }
      else if(res.msg=="invalidu")
      {
        alert("invalid username")
      }
    }
      );

  }

}
