import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAnswerListComponent } from './question-answer-list.component';
import { AnswerComponent } from '../answer/answer.component';
import { QuestionComponent } from '../question/question.component';
import { QuestionAnswerRoutingModule } from './question-answer-routing.module';

@NgModule({
  imports: [CommonModule, QuestionAnswerRoutingModule],
  declarations: [
    QuestionAnswerListComponent,
    QuestionComponent,
    AnswerComponent
  ]
})
export class QuestionAnswerModule {}
