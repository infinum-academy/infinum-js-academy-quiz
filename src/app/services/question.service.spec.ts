import { TestBed } from '@angular/core/testing';
import { Question } from '../interfaces/question.interface';
import { QuestionService } from './question.service';
import { QUESTIONS } from './questions.injection-token';

describe('QuestionService', () => {
	let service: QuestionService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [QuestionService, { provide: QUESTIONS, useValue: [] }],
		});
		service = TestBed.inject(QuestionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a observable of list of questions', (done: DoneFn) => {
		service.fetchQuestions().subscribe((questions: Array<Question>) => {
			expect(questions).toBeTruthy();
			done();
		});
	});
});
