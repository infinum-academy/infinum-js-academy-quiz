import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { QuestionType } from '../../enums/question-type.enum';
import { QuizResult } from '../../interfaces/quiz-result.interface';
import { quizResultMock } from '../../mocks/quiz-result.mock';
import { HeaderComponent } from '../header/header.component';
import { ResultsComponent } from './results.component';

@Component({
	template: `
		<app-results #resultsComponent [quizResult]="quizResult"></app-results>
	`,
})
class WrapperComponent {
	@ViewChild('resultsComponent', { static: true })
	component: ResultsComponent;
	public quizResult: QuizResult;
}
describe('ResultsComponent', () => {
	let wrapperComponent: WrapperComponent;
	let component: ResultsComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ResultsComponent, HeaderComponent, WrapperComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		wrapperComponent = fixture.componentInstance;
		component = wrapperComponent.component;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display no questions answered message', () => {
		wrapperComponent.quizResult = null;
		fixture.detectChanges();

		const element: HTMLParagraphElement = fixture.debugElement.query(
			By.css('p')
		).nativeElement;
		expect(element.innerText).toContain(
			'Please answer at least one question to view results.'
		);
	});

	it('should display quiz results when results are provided', () => {
		wrapperComponent.quizResult = quizResultMock;
		fixture.detectChanges();

		expect(fixture.debugElement.query(By.css('.quiz-results'))).toBeTruthy();
	});
});
