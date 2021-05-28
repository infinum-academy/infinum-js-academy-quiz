import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { IntroductionComponent } from './introduction.component';

@Component({
	template: `
		<app-introduction
			#introductionComponent
			[numberOfQuestions]="numberOfQuestions"
		></app-introduction>
	`,
})
class WrapperComponent {
	@ViewChild('introductionComponent', { static: true })
	component: IntroductionComponent;
	public numberOfQuestions: number;
}
describe('IntroductionComponent', () => {
	let wrapperComponent: WrapperComponent;
	let component: IntroductionComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IntroductionComponent, HeaderComponent, WrapperComponent],
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

	it('should contain header', () => {
		expect(fixture.debugElement.query(By.css('app-header'))).toBeTruthy();
	});

	it('should contain welcome title', () => {
		expect(fixture.debugElement.query(By.css('h2'))).toBeTruthy();
	});

	it('should contain number of questions', () => {
		wrapperComponent.numberOfQuestions = 10;
		fixture.detectChanges();

		const element: HTMLParagraphElement = fixture.debugElement.query(
			By.css('p:nth-of-type(2)')
		).nativeElement;
		expect(element.innerText).toContain(
			wrapperComponent.numberOfQuestions.toString()
		);
	});
});
