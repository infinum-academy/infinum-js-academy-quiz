import { QuestionType } from '../enums/question-type.enum';
import { QuestionAnswer } from '../interfaces/question-answer.interface';
import { Question } from '../interfaces/question.interface';

export const questionMock: Question = {
	id: 'Q1',
	title: 'Q?',
	type: QuestionType.JS,
	possibleAnswers: [
		{ id: 'A1', title: 'A1' },
		{ id: 'A2', title: 'A2' },
	],
};

export const correctAnswerMock: QuestionAnswer = {
	answerId: questionMock.possibleAnswers[0].id,
	questionId: questionMock.id,
};
