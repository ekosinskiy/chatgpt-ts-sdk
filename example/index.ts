import {API_KEY} from './api-key';
import ChatGptApi from '../src/chat-gpt-api';

(async () => {
    const buildRequest = new ChatGptApi(API_KEY);
    const response = await buildRequest.getAnswer('write a short story about space');
    console.log('resp', JSON.stringify(response, null, 4));
})();
