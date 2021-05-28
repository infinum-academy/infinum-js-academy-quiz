import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizResult } from '../interfaces/quiz-result.interface';
import { quizResultMock } from './quiz-result.mock';

@Injectable()
export class ResultServiceStub {
	public calculateResults(): Observable<QuizResult> {
		return of(quizResultMock);
	}
}
