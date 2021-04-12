/* Team: Madeline, Vandana, Dhruv, Priya 
Routes are defined here
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { SurveyrecordsComponent } from './surveyrecords/surveyrecords.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyformComponent,
    SurveyrecordsComponent,
    HomepageComponent,
    SuccessComponent
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,

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
      },
      {
        path: 'success',
        
        component: SuccessComponent
      }

     

    ]),
    HttpClientModule
    

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
