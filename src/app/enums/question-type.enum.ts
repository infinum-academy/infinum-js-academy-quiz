export enum QuestionType {
	GIT = 'GIT',
	JS = 'JS',
}

export const questionTypeData: { [type in QuestionType]: { label: string } } = {
	[QuestionType.GIT]: {
		label: 'Git',
	},

	[QuestionType.JS]: {
		label: 'JavaScript',
	},
};
