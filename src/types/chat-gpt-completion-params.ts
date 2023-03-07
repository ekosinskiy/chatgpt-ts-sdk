export type ChatGptCompletionParams = {
    temperature?: number,
    top_p?: number,
    n?: number,
    stream?: boolean,
    stop?: null | string | string[],
    max_tokens?: number,
    presence_penalty?: number,
    frequency_penalty?: number,
    logit_bias?: any,
    user?: string
};
