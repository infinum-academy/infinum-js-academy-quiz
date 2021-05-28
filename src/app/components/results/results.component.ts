import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionType } from '../../enums/question-type.enum';
import { QuizResult } from '../../interfaces/quiz-result.interface';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
	@Input() quizResult: QuizResult;

	public questionTypes: Array<QuestionType> = Object.values(QuestionType);
}
