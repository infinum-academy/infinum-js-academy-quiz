import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {
	@Input() numberOfQuestions: number;
}
