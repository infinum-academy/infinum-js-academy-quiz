import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain infinum academy logo', () => {
		const element: HTMLImageElement = fixture.debugElement.query(
			By.css('img')
		).nativeElement;
		expect(element.src).toContain('./assets/img/academy-logo.svg');
	});

	it('should contain alt text in image', () => {
		const element: HTMLImageElement = fixture.debugElement.query(
			By.css('img')
		).nativeElement;
		expect(element.alt).toBe('Infinum Academy logo');
	});
});
