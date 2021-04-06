import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {

  public FirstName: string;
  public LastName: string;
  public StreetAddress: string;
  public City: string;
  public State: string;
  public Zipcode: string;
  public Phone: string;
  public Email: string;
  public Date: string;
  public favorite: string;
  public interest: string;
  public recommendation: string;
  public raffle: string;
  public comments: string;
  constructor(private httpClient: HttpClient) {
    this.FirstName = "";
    this.LastName = "";
    this.StreetAddress = "";
    this.City = "";
    this.State = "";
    this.Zipcode = "";
    this.Phone = "";
    this.Email = "";
    this.Date = "";
    this.favorite = "";
    this.interest = "";
    this.recommendation = "";
    this.raffle = "";
    this.comments = "";
   }
   
  ngOnInit(): void {
  }
  private REST_API_SERVER = "http://localhost:8080/SurveyApp/survey";
  
  onSubmit(formData: { FirstName: string; LastName: string; }) {
    const headers = { 'content-type': 'application/json',  'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
   }  
    // console.log("Firstname: " + formData.FirstName
      // + "lastname: " + formData.LastName);
    const body = "{ \"firstname\":" + this.FirstName + ", \"lastname\":" + this.LastName + ",\"streetAddress\":"
      + this.StreetAddress + ",\"city\":" + this.City + ",\"state\":" + this.State + ",\"zipcode\":"
      + this.Zipcode + ",\"phone\":" + this.Phone + ",\"email\":" + this.Email + ",\"date\":" + this.Date + ",\"favorite\":"
      + this.favorite + ",\"interest\":" + this.interest + ",\"recommendation\":" + this.recommendation + ",\"raffle\":"
      + "\""+this.raffle + "\""+ ",\"comments\":" + this.comments + "}";
    
    console.log("body    " + body);
    console.log(this.httpClient.post(this.REST_API_SERVER, body, { 'headers': headers }).subscribe());
    
 } 

}
