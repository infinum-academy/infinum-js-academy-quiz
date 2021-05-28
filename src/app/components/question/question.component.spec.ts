import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { Question } from '../../interfaces/question.interface';
import { questionMock } from '../../mocks/question.mock';
import { QuestionComponent } from './question.component';

@Component({
	template: `
		<app-question
			#questionComponent
			[question]="question"
			[questionIndex]="questionIndex"
			[numberOfQuestions]="numberOfQuestions"
		></app-question>
	`,
})
class WrapperComponent {
	@ViewChild('questionComponent', { static: true })
	component: QuestionComponent;
	public question: Question;
	public questionIndex: number;
	public numberOfQuestions: number;
}
describe('QuestionFormComponent', () => {
	let wrapperComponent: WrapperComponent;
	let component: QuestionComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatRadioModule],
			declarations: [QuestionComponent, WrapperComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		wrapperComponent = fixture.componentInstance;
		component = wrapperComponent.component;
		wrapperComponent.question = questionMock;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
