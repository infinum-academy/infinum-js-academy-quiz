import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { QuestionAnswer } from './interfaces/question-answer.interface';
import { Question } from './interfaces/question.interface';
import { QuizResult } from './interfaces/quiz-result.interface';
import { QuestionService } from './services/question.service';
import { ResultService } from './services/result.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public quizResult$: Observable<QuizResult>;
	public questions$: Observable<Array<Question>>;
	public selectedAnswers: Array<QuestionAnswer> = [];

	private triggerCalculatingResult$: Subject<Array<Question>> = new Subject();

	constructor(
		private questionService: QuestionService,
		private resultService: ResultService
	) {}

	ngOnInit() {
		this.questions$ = this.questionService.fetchQuestions();
		this.quizResult$ = this.triggerCalculatingResult$.pipe(
			mergeMap((questions: Array<Question>) =>
				this.resultService.calculateResults(questions, this.selectedAnswers)
			)
		);
	}

	public onAnswerSelect(
		questions: Array<Question>,
		questionId: string,
		answerId: string
	): void {
		const alreadySelectedAnswer: QuestionAnswer = this.selectedAnswers.find(
			(selectedAnswer: QuestionAnswer) =>
				selectedAnswer.questionId === questionId
		);

		if (alreadySelectedAnswer) {
			alreadySelectedAnswer.answerId = answerId;
		} else {
			this.selectedAnswers.push({ answerId, questionId });
		}

		this.triggerCalculatingResult$.next(questions);
	}

	public calculateProgress(
		numberOfQuestions: number,
		numberOfAnswers: number
	): number {
		return Math.round((numberOfAnswers / numberOfQuestions) * 100);
	}
}
