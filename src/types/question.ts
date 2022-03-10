import { AnswerType } from "./answer";

export interface QuestionType {
    id: string;
    answers: AnswerType[]
}