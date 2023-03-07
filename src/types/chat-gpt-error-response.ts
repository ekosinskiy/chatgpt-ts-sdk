export type ChatGptErrorResponse = {
    error: {
        message: string,
        type: string,
        param: any,
        code: string
    }
}
