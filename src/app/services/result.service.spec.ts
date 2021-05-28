import { TestBed } from '@angular/core/testing';
import { QuestionAnswer } from '../interfaces/question-answer.interface';
import { QuizResult } from '../interfaces/quiz-result.interface';
import { correctAnswerMock, questionMock } from '../mocks/question.mock';
import { ANSWERS } from './answers.injection-token';
import { ResultService } from './result.service';

describe('ResultService', () => {
	let service: ResultService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResultService,
				{ provide: ANSWERS, useValue: [correctAnswerMock] },
			],
		});
		service = TestBed.inject(ResultService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('Calculating quiz results', () => {
		it('should return observable of object with quiz results when user has answered correctly to a question', (done: DoneFn) => {
			service
				.calculateResults([questionMock], [correctAnswerMock])
				.subscribe((result: QuizResult) => {
					expect(result[questionMock.type].answered).toBe(1);
					expect(result[questionMock.type].answeredCorrectly).toBe(1);
					expect(result[questionMock.type].total).toBe(1);
					done();
				});
		});

		it('should return observable of object with quiz results when user has not answered to any question', (done: DoneFn) => {
			service
				.calculateResults([questionMock], [])
				.subscribe((result: QuizResult) => {
					expect(result[questionMock.type].answered).toBe(0);
					expect(result[questionMock.type].answeredCorrectly).toBe(0);
					expect(result[questionMock.type].total).toBe(1);
					done();
				});
		});

		it('should return observable of object with quiz results when user has answered incorrectly to a question', (done: DoneFn) => {
			const incorrectAnswer: QuestionAnswer = {
				answerId: 'A2',
				questionId: 'Q1',
			};
			service
				.calculateResults([questionMock], [incorrectAnswer])
				.subscribe((result: QuizResult) => {
					expect(result[questionMock.type].answered).toBe(1);
					expect(result[questionMock.type].answeredCorrectly).toBe(0);
					expect(result[questionMock.type].total).toBe(1);
					done();
				});
		});
	});
});
