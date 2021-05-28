import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/results/results.component';
import { questionMock } from './mocks/question.mock';
import { QuestionServiceStub } from './mocks/question.service.stub';
import { ResultServiceStub } from './mocks/result.service.stub';
import { QuestionService } from './services/question.service';
import { ResultService } from './services/result.service';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				MatButtonModule,
				MatProgressBarModule,
				MatRadioModule,
				MatStepperModule,
				NoopAnimationsModule,
			],
			declarations: [
				AppComponent,
				HeaderComponent,
				IntroductionComponent,
				ResultsComponent,
				QuestionComponent,
			],
			providers: [
				{
					provide: QuestionService,
					useClass: QuestionServiceStub,
				},
				{
					provide: ResultService,
					useClass: ResultServiceStub,
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		const questionService: QuestionService = TestBed.inject(QuestionService);
		spyOn(questionService, 'fetchQuestions').and.returnValue(
			of([questionMock])
		);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain introduction step', () => {
		expect(fixture.debugElement.query(By.css('app-introduction'))).toBeTruthy();
	});

	it('should contain question step', () => {
		expect(fixture.debugElement.query(By.css('app-question'))).toBeTruthy();
	});

	it('should contain results step', () => {
		expect(fixture.debugElement.query(By.css('app-results'))).toBeTruthy();
	});

	it('should calculate percentage of answered questions', () => {
		const total: number = 2;
		const answered: number = 1;
		expect(component.calculateProgress(total, answered)).toBe(50);
	});

	it('should calculate results on question answer', () => {
		const resultService: ResultService = TestBed.inject(ResultService);
		const spy: jasmine.Spy = spyOn(
			resultService,
			'calculateResults'
		).and.callThrough();

		component.onAnswerSelect(
			[questionMock],
			questionMock.id,
			questionMock.possibleAnswers[0].id
		);

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
