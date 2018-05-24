import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './test/question/question.component';
import { ReviewComponent } from './review/review.component';
import { QuestionWithAnswersComponent } from './review/question-with-answers/question-with-answers.component';
import { TestDataService} from './test-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    QuestionComponent,
    ReviewComponent,
    QuestionWithAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'test', component: TestComponent},
      {path:'review', component: ReviewComponent},
      {path:'dashboard', component: DashboardComponent},
      {path:'', redirectTo:"/dashboard", pathMatch:"full"}
    ])    
  ],
  providers: [TestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
