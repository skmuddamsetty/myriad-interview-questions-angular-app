import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { QandA } from '../models/QandA';

@Component({
  selector: 'app-question-answer-list',
  templateUrl: './question-answer-list.component.html',
  styleUrls: ['./question-answer-list.component.scss']
})
export class QuestionAnswerListComponent implements OnInit, OnDestroy {
  items: Observable<any[]>;
  questions: [];
  currentQandA: QandA;
  selectedTopic: string;
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    public db: AngularFirestore,
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.dataService.getCurrentQandA().subscribe(res => {
        this.currentQandA = res;
        console.log(this.currentQandA);
      })
    );
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.dataService.loadQuestionsFromDB(params['topic']).subscribe(res => {
          console.log(res);
          this.currentQandA = res;
        });
      })
    );
    // this.items = this.db
    //   .collection(AppConstants.ANGULAR_INTERVIEW_QUESTIONS)
    //   .valueChanges();
    // this.items.subscribe(data => {
    //   console.log(data[0].questions);
    //   this.questions = data[0].questions;
    // });
  }

  onPrevQuestion(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dataService.setPrevQandA();
  }

  onNextQuestion(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dataService.setNextQandA();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
  }
}
