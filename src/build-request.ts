import {ChatGptMessage, ChatGptRoleList, ChatGptRoles, ChatGptResponse} from './types';

/**
 * @deprecated
 * This class is used for backward capability
 */
export class BuildRequest {

    // list of messages which will send by Chat GPT API
    private messages: ChatGptMessage[] = [];

    constructor(
        private apiKey: string,
        private aiModel = 'gpt-3.5-turbo',
        private role: ChatGptRoles = ChatGptRoleList.USER) {}

    /**
     * Set AI engine model for generating response
     * @param aiModel
     */
    public setAiModel(aiModel: string): void {
        this.aiModel = aiModel;
    }

    /**
     * Set role for single
     * @param role
     */
    public setRole(role: ChatGptRoles): void {
        this.role = role;
    }

    /**
     * Clean messages
     * @private
     */
    private resetMessages(): void {
        this.messages = [];
    }

    /**
     * Build request data for sending to ChatGPT API
     * @private
     */
    private buildRequest(): any {
        const requestBody = {
            model: this.aiModel,
            messages: this.messages
        };
        return {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };
    }

    /**
     * Add new message
     * @param role
     * @param content
     */
    public addMessage(role: ChatGptRoles, content: string): void {
        this.messages.push({
            role,
            content
        });
    }

    /**
     * Return answers for multiple requests
     */
    public async processMultipleMessages(): Promise<ChatGptResponse> {
        const requestData = this.buildRequest();
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestData);
        const jsonResponse: ChatGptResponse = await response.json();
        this.resetMessages();
        return jsonResponse;
    }

    /**
     * Return answer for single request
     * @param content
     */
    public async getAnswer(content: string): Promise<ChatGptResponse> {
        this.resetMessages();
        this.addMessage(this.role, content);
        const requestData = this.buildRequest();
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestData);
        const jsonResponse: ChatGptResponse = await response.json();
        return jsonResponse;
    }
}
