import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { QuestionType } from '../../enums/question-type.enum';
import { QuizResultItem } from '../../interfaces/quiz-result.interface';
import { quizResultMock } from '../../mocks/quiz-result.mock';
import { QuizResultItemComponent } from './quiz-result-item.component';

@Component({
	template: `
		<app-quiz-result-item
			#quizResultItemComponent
			[questionType]="questionType"
			[quizResultItem]="quizResultItem"
		></app-quiz-result-item>
	`,
})
class WrapperComponent {
	@ViewChild('quizResultItemComponent', { static: true })
	component: QuizResultItemComponent;
	public quizResultItem: QuizResultItem;
	public questionType: QuestionType;
}
describe('QuizResultItemComponent', () => {
	let wrapperComponent: WrapperComponent;
	let component: QuizResultItemComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatProgressBarModule],
			declarations: [QuizResultItemComponent, WrapperComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		wrapperComponent = fixture.componentInstance;
		component = wrapperComponent.component;

		wrapperComponent.questionType = QuestionType.GIT;
		wrapperComponent.quizResultItem =
			quizResultMock[wrapperComponent.questionType];

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should calculate percentage of answered questions', () => {
		const answered: number = 1;
		const total: number = 2;
		expect(component.calculateProgress(answered, total)).toBe(50);
	});
});
