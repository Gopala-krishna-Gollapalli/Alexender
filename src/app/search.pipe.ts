import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(data: any[],searchTerm:any,s:string): any {
   

    console.log(s);
 
 
 
     if(!data||!searchTerm)
     {
       return data;
     }
     else if(s == 'phno')
     {
       
   
      return data.filter(x=> x[s].toString().indexOf(searchTerm)!==-1);
 
     }
     else {
       return data.filter(x=> x[s].toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
     }
 
   }

}




