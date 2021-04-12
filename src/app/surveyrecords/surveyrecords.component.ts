/* Team: Madeline, Vandana, Dhruv, Priya 
Component for Survey records. Fires a get request to the server, converts into json and sends to the html
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


  
@Component({
  selector: 'app-surveyrecords',
  templateUrl: './surveyrecords.component.html',
  styleUrls: ['./surveyrecords.component.css']
})

export class SurveyrecordsComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) {
   
  }
  public columndefs: any[] = ['firstname','lastname', 'city', 'state', 'zipcode', 'phone', 'email'
  ,'date', 'favorite', 'interest','recommendation', 'raffle', 'comments'];
  public surveyrecords: any[] = [];
  
  cleanString(str:string) {
    str = str.replace('"[', '[');
    str = str.replace(']"', ']');
  return str;
}
  ngOnInit(): void {
    
    const REST_API_SERVER = environment.apiUrl;
    const headers = {
      'Accept': 'application/json'
    };
    
    this.httpClient.get(REST_API_SERVER, { 'headers': headers }).subscribe((data: any) => {
      for (var val of data["result"]) {
       
        const json:any = this.cleanString(val);
        console.log(JSON.parse(json));
        this.surveyrecords.push(JSON.parse(json));
      }
      
      
      console.log(this.surveyrecords)
      
      
    });
    
  }
  dataSource = this.surveyrecords;
  
  
  
}
