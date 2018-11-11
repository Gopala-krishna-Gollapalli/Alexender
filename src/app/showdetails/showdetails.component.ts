import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {
kl:any;
s;
searchTerm:any;
  constructor(private g:DataService) { }
  options=['name','phno'];
  ngOnInit() {
    this.g.method6().subscribe(x=>this.kl=x);
    
  }
  dynamicOption(xxx){
    this.s=xxx;
     }

}
