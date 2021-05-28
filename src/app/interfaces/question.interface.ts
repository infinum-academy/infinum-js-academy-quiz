import { QuestionType } from '../enums/question-type.enum';
import { Answer } from './answer.interface';

export interface Question {
	title: string;
	id: string;
	possibleAnswers: Array<Answer>;
	type: QuestionType;
}
