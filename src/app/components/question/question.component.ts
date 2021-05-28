import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Question } from '../../interfaces/question.interface';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
	@Input() question: Question;
	@Input() questionIndex: number;
	@Input() numberOfQuestions: number;

	@Output() answered: EventEmitter<string> = new EventEmitter();

	public onAnswerSelect(radioChange: MatRadioChange): void {
		this.answered.emit(radioChange.value);
	}
}
