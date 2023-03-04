export type ChatGptMessage = {
    role: string,
    content: string
}

export type ChatGptResponseMessage = {
    role: ChatGptRoles,
    content: string,
    finish_reason: string,
    index: number
}

type ChatGptUsage = {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
}

export type ChatGptErrorResponse = {
    error: {
        message: string,
        type: string,
        param: any,
        code: string
    }
}

export type ChatGptSuccessResponse = {
    id: string,
    object: string,
    created: number,
    usage: ChatGptUsage,
    choices: ChatGptResponseMessage[]
}

export type ChatGptResponse = ChatGptSuccessResponse | ChatGptErrorResponse;

export type ChatGptRequest = {
    model: string,
    messages: ChatGptMessage[]
}

export enum ChatGptRoleList {
    USER = 'user',
    SYSTEM = 'system',
    ASSISTANT = 'assistant'
}

export type ChatGptRoles = ChatGptRoleList.USER | ChatGptRoleList.ASSISTANT | ChatGptRoleList.SYSTEM;
