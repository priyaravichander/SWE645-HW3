import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';


  
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
  public ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  cleanString(str:string) {
    str = str.replace('"[', '[');
    str = str.replace(']"', ']');
    // str = str.replace('"', '\'');
  return str;
}
  ngOnInit(): void {
    
    const REST_API_SERVER = "http://localhost:8080/SurveyApp/survey";
    const headers = {
      'Accept': 'application/json'
    };
    
    this.httpClient.get(REST_API_SERVER, { 'headers': headers }).subscribe((data: any) => {
      for (var val of data["result"]) {
        // console.log(val); // prints values: 10, 20, 30, 40
        // JSON.parse(val);
        const json:any = this.cleanString(val);
        console.log(JSON.parse(json));
        this.surveyrecords.push(JSON.parse(json));
      }
      
      // this.surveyrecords = data["result"];
      console.log(this.surveyrecords)
      this.dataSource = this.ELEMENT_DATA;
      // console.log(this.dataSource)
    });
    
  }
  dataSource = this.surveyrecords;
  // console.log(datasource1 +" datasource1");
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  // console.log("abc");
  
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}