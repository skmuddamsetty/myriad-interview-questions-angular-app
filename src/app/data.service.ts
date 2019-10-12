import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { QandA } from './models/QandA';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppConstants } from './shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questionsArray: QandA[];
  currentQandANo = -1;
  private currentQandA = new Subject<QandA>();

  constructor(public db: AngularFirestore) {}

  // setCurrentQandANo(qanda: QandA) {
  //   this.currentQandA.next(qanda);
  // }

  // clearCurrentQandANo() {
  //   this.currentQandA.next();
  // }

  // getCurrentQandANo(): Observable<QandA> {
  //   return this.currentQandA.asObservable();
  // }

  setNextQandA() {
    if (this.currentQandANo === this.questionsArray.length) {
      this.currentQandA.next(this.questionsArray[0]);
    } else {
      this.currentQandANo++;
      this.currentQandA.next(this.questionsArray[this.currentQandANo]);
    }
  }

  setPrevQandA() {
    if (this.currentQandANo >= 1) {
      this.currentQandANo--;
      this.currentQandA.next(this.questionsArray[this.currentQandANo]);
    } else {
      this.currentQandA.next(this.questionsArray[0]);
    }
  }

  getNextQandA(): Observable<QandA> {
    if (this.currentQandANo === this.questionsArray.length) {
      this.currentQandA.next(this.questionsArray[0]);
    } else {
      this.currentQandANo++;
      this.currentQandA.next(this.questionsArray[this.currentQandANo]);
    }
    return this.currentQandA.asObservable();
  }

  getPrevQandA(): Observable<QandA> {
    if (this.currentQandANo >= 1) {
      this.currentQandANo--;
      this.currentQandA.next(this.questionsArray[this.currentQandANo]);
    } else {
      this.currentQandA.next(this.questionsArray[0]);
    }
    return this.currentQandA.asObservable();
  }

  getCurrentQandA(): Observable<QandA> {
    if (this.currentQandANo >= 0) {
      this.currentQandA.next(this.questionsArray[this.currentQandANo]);
    }
    return this.currentQandA.asObservable();
  }

  loadQuestionsFromDB(topic: string) {
    switch (topic) {
      case AppConstants.ANGULAR:
        this.questionsArray = [
          {
            question: 'First Question',
            answer: 'First Answer'
          },
          {
            question: 'Second Question',
            answer: 'Second Answer'
          }
        ];
        break;
      case AppConstants.REACT:
        this.questionsArray = [
          {
            question: 'First React Question',
            answer: 'First Answer'
          },
          {
            question: 'Second React Question',
            answer: 'Second Answer'
          }
        ];
        break;
      default:
        break;
    }
    this.currentQandANo = 0;
    this.currentQandA.next(this.questionsArray[this.currentQandANo]);
  }
}
