import { QuestionType } from '../enums/question-type.enum';

export interface QuizResult {
	[key: string]: QuizResultItem;
}

export interface QuizResultItem {
	answered: number;
	answeredCorrectly: number;
	total: number;
}
