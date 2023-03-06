import {ChatGptSuccessResponse} from './chat-gpt-success-response';
import {ChatGptErrorResponse} from './chat-gpt-error-response';

export type ChatGptResponse = ChatGptSuccessResponse | ChatGptErrorResponse;
