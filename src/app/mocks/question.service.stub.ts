import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { questionMock } from './question.mock';

@Injectable()
export class QuestionServiceStub {
	public fetchQuestions(): Observable<Array<Question>> {
		return of([questionMock]);
	}
}
