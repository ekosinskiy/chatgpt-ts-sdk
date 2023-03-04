export type ChatGptMessage = {
    role: string,
    content: string
}

export type ChatGptResponseMessage = {
    role: string,
    content: string,
    finish_reason: string,
    index: number
}

type ChatGptUsage = {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
}

export type ChatGptResponse = {
    id: string,
    object: string,
    created: number,
    usage: ChatGptUsage,
    choices: ChatGptResponseMessage[]
}

export type ChatGptRequest = {
    model: string,
    messages: ChatGptMessage[]
}
