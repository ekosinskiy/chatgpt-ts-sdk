import {API_KEY} from './api-key';
import ChatGptApi from '../src/chat-gpt-api';

(async () => {
    const chatGptApi = new ChatGptApi(API_KEY);
    chatGptApi.enableDebugging();
    const response = await chatGptApi.getAnswer('write a short story about space');
    console.log('resp', JSON.stringify(response, null, 4));
})();
