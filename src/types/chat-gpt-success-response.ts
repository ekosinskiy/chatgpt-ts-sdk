import {ChatGptUsage} from './chat-gpt-usage';
import {ChatGptResponseMessage} from './chat-gpt-response-message';

export type ChatGptSuccessResponse = {
    id: string,
    object: string,
    created: number,
    usage: ChatGptUsage,
    choices: ChatGptResponseMessage[]
}
