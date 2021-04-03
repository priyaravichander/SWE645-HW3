import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { SurveyrecordsComponent } from './surveyrecords/surveyrecords.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SurveyformComponent,
    SurveyrecordsComponent,
    HomepageComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'surveyform',
        component: SurveyformComponent
      },
      {
        path: 'surveyrecords',
        
        component: SurveyrecordsComponent
      }
     

    ]),
    HttpClientModule
    

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
