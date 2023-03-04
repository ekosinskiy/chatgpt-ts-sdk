import {ChatGptRequest, ChatGptResponse} from './types';

export default class BuildRequest {

    constructor(private apiKey: string, private aiModel = 'gpt-3.5-turbo') {}

    public setAiModel(aiModel: string): void {
        this.aiModel = aiModel;
    }

    private buildBody(content: string): ChatGptRequest {
        return {
            model: this.aiModel,
            messages: [
                {
                    role: "user",
                    content: content
                }
            ]
        };
    }

    public async getAnswer(content: string): Promise<ChatGptResponse> {
        const request: ChatGptRequest = this.buildBody(content);
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        });
        const jsonResponse: ChatGptResponse = await response.json();
        return jsonResponse;
    }
}
