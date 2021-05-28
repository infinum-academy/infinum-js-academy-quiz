import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionType } from '../enums/question-type.enum';
import { QuestionAnswer } from '../interfaces/question-answer.interface';
import { Question } from '../interfaces/question.interface';
import {
	QuizResult,
	QuizResultItem,
} from '../interfaces/quiz-result.interface';
import { ANSWERS } from './answers.injection-token';

@Injectable()
export class ResultService {
	constructor(@Inject(ANSWERS) private answers: Array<QuestionAnswer>) {}

	public calculateResults(
		questions: Array<Question>,
		selectedAnswers: Array<QuestionAnswer>
	): Observable<QuizResult> {
		// returning observable of array instead of array to mock async API call
		return of(
			Object.values(QuestionType).reduce(
				(result: object, type: QuestionType) => {
					result[type] = this.calculateQuizResults(
						this.filterQuestionsByType(questions, type),
						selectedAnswers
					);
					return result;
				},
				{}
			) as QuizResult
		);
	}

	private filterQuestionsByType(
		questions: Array<Question>,
		type: QuestionType
	): Array<Question> {
		return questions.filter((question: Question) => question.type === type);
	}

	private calculateQuizResults(
		questions: Array<Question>,
		selectedAnswers: Array<QuestionAnswer>
	): QuizResultItem {
		const total: number = questions.length;
		let answered: number = 0;
		let answeredCorrectly: number = 0;

		questions.forEach((question: Question) => {
			const correctAnswer: QuestionAnswer = this.findQuestionAnswerByQuestionId(
				this.answers,
				question.id
			);
			const selectedAnswer: QuestionAnswer =
				this.findQuestionAnswerByQuestionId(selectedAnswers, question.id);

			if (selectedAnswer) {
				answered++;

				if (selectedAnswer.answerId === correctAnswer.answerId) {
					answeredCorrectly++;
				}
			}
		});

		return { answered, answeredCorrectly, total };
	}

	private findQuestionAnswerByQuestionId(
		questionAnswers: Array<QuestionAnswer>,
		questionId: string
	): QuestionAnswer {
		return questionAnswers.find(
			(item: QuestionAnswer) => item.questionId === questionId
		);
	}
}
