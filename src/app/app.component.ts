import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  output:any;
  url='http://back-service:5000';
  constructor(private http:HttpClient){
  
  }
  
  callApi(){
    console.log('Click Me');
    let header = new HttpHeaders().set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
    .set('Access-Control-Allow-Origin','*')
    //.set('Accept-Encoding',' gzip, deflate')
    
    this.http.get(this.url+'/',{headers:header}).subscribe(response=>{
      console.log(response);
      this.output= response;
    })
  }
}
