import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { QUESTIONS } from './questions.injection-token';

@Injectable()
export class QuestionService {
	constructor(@Inject(QUESTIONS) private questions: Array<Question>) {}

	public fetchQuestions(): Observable<Array<Question>> {
		// returning observable of array instead of array to mock async API call
		return of(this.questions);
	}
}
