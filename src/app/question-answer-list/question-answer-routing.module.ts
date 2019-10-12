import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionAnswerListComponent } from './question-answer-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionAnswerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAnswerRoutingModule {}
