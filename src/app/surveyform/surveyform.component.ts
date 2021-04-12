/* Team: Madeline, Vandana, Dhruv, Priya 
Component for survey form. Fires a post request to the server and gets the response
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {
  
  favoriteOptions = [
    {name:'Students', value:'Students', checked:false},
    {name:'Location', value:'Location', checked:false},
    { name: 'Campus', value: 'Campus', checked: false },
    { name: 'Atmosphere', value: 'Atmosphere', checked: false },
    { name: 'Dorm Rooms', value: 'DormRooms', checked: false },
    { name: 'Sports', value: 'Sports', checked: false },
    {name:'Other', value:'Other', checked:false}
  ]
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
  public uploadForm: FormGroup | undefined;
  
  constructor(private httpClient: HttpClient, private router: Router) {
    
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
    this.uploadForm = new FormGroup({
      customerFirstName: new FormControl(null, Validators.required)
    });
  }
  private REST_API_SERVER = environment.apiUrl;
  
  onSubmit(formData: { FirstName: string; LastName: string; }) {
 
    
    const headers = {
      'content-type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
    console.log("slecetd options"+this.selectedOptions);
    
    const body = "{ \"firstname\":\"" + this.FirstName + "\", \"lastname\":\"" + this.LastName + "\",\"streetAddress\":\""
      + this.StreetAddress + "\",\"city\":\"" + this.City + "\",\"state\":\"" + this.State + "\",\"zipcode\":\""
      + this.Zipcode + "\",\"phone\":\"" + this.Phone + "\",\"email\":\"" + this.Email + "\",\"date\":\"" + this.Date + "\",\"favorite\":\""
      + this.selectedOptions + "\",\"interest\":\"" + this.interest + "\",\"recommendation\":\"" + this.recommendation + "\",\"raffle\":"
      + "\"" + this.raffle + "\"" + ",\"comments\":\"" + this.comments + "\"}";
    
    
    console.log(this.httpClient.post(this.REST_API_SERVER, body, { 'headers': headers }).subscribe());
    this.router.navigate(['success']);
    
 }
 get selectedOptions() { 
  return this.favoriteOptions
            .filter(opt => opt.checked)
            .map(opt => opt.value)
}
}
