import {ChatGptMessage} from './chat-gpt-message';

export type ChatGptRequest = {
    model: string,
    messages: ChatGptMessage[]
}
