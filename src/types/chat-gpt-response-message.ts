import {ChatGptRoles} from './chat-gpt-roles';

export type ChatGptResponseMessage = {
    role: ChatGptRoles,
    content: string,
    finish_reason: string,
    index: number
}
