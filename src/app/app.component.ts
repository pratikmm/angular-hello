import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  output:any;
  constructor(private http:HttpClient){
  
  }
  
  callApi(){
    console.log('Click Me');
    this.http.get('http://back-service:5000/test').subscribe(response=>{
      console.log(response);
      this.output= response;
    })
  }
}
