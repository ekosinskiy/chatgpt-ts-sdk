import {ChatGptMessage, ChatGptRoleList, ChatGptRoles, ChatGptResponse, ChatGptCompletionParams} from './types';

const chatGptURL = 'https://api.openai.com/v1/chat/completions';

/**
 * Main class for make requests
 */
export class ChatGptApi {

    // list of messages which will send by Chat GPT API
    private messages: ChatGptMessage[] = [];
    private isDebug = false;

    constructor(
        private apiKey: string,
        private aiModel = 'gpt-3.5-turbo',
        private role: ChatGptRoles = ChatGptRoleList.USER) {}

    public enableDebugging(): void {
        this.isDebug = true;
    }

    public disableDebugging(): void {
        this.isDebug = false;
    }

    /**
     * Set AI engine model for generating response
     * @param aiModel
     */
    public setAiModel(aiModel: string): void {
        this.printLog('call setAiModel');
        this.printLog('set AI model as', aiModel);
        this.aiModel = aiModel;
    }

    private printLog(...params: any): void {
        if (this.isDebug) {
            console.log((new Date()).toISOString(),"\t",JSON.stringify(params, null, 4));
        }
    }

    /**
     * Set role for single
     * @param role
     */
    public setRole(role: ChatGptRoles): void {
        this.printLog('call setRole');
        this.printLog('set role', role);
        this.role = role;
    }

    /**
     * Clean messages
     * @private
     */
    private resetMessages(): void {
        this.printLog('clean message array');
        this.messages = [];
    }

    /**
     * Build request data for sending to ChatGPT API
     * @param completionParams
     * @private
     */
    private buildRequest(completionParams?: ChatGptCompletionParams): any {
        const requestBody = {
            model: this.aiModel,
            messages: this.messages,
            ...completionParams
        };
        this.printLog('prepare request body', requestBody);
        const requestData = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };
        this.printLog('full request data', requestData);
        return requestData;
    }

    /**
     * Add new message
     * @param role
     * @param content
     */
    public addMessage(role: ChatGptRoles, content: string): void {
        this.printLog('call addMessage');
        const newMessage:ChatGptMessage = {
            role,
            content
        };
        this.printLog('add new message', newMessage);
        this.messages.push(newMessage);
    }

    /**
     * Return answers for multiple requests
     * @param completionParams
     */
    public async processMultipleMessages(completionParams?: ChatGptCompletionParams): Promise<ChatGptResponse> {
        this.printLog('call processMultipleMessages');
        const requestData = this.buildRequest(completionParams);
        const response = await fetch(chatGptURL, requestData);
        const jsonResponse: ChatGptResponse = await response.json();
        this.resetMessages();
        return jsonResponse;
    }

    /**
     * Return answer for single request
     * @param content
     * @param completionParams
     */
    public async getAnswer(content: string, completionParams?: ChatGptCompletionParams): Promise<ChatGptResponse> {
        this.resetMessages();
        this.addMessage(this.role, content);
        const requestData = this.buildRequest(completionParams);
        const response = await fetch(chatGptURL, requestData);
        const jsonResponse: ChatGptResponse = await response.json();
        return jsonResponse;
    }
}
