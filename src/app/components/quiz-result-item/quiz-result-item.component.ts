import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionType, questionTypeData } from '../../enums/question-type.enum';
import { QuizResultItem } from '../../interfaces/quiz-result.interface';

@Component({
	selector: 'app-quiz-result-item',
	templateUrl: './quiz-result-item.component.html',
	styleUrls: ['./quiz-result-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizResultItemComponent {
	@Input() questionType: QuestionType;
	@Input() quizResultItem: QuizResultItem;

	public questionTypeData = questionTypeData;

	public calculateProgress(answered: number, total: number): number {
		if (!answered || !total) {
			return 0;
		}

		return Math.round((answered / total) * 100);
	}
}
