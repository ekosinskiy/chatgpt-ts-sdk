import BuildRequest from '../build-request';

const API_KEY = 'YOU_CHAT_GPT_API';


(async () => {
    const buildRequest = new BuildRequest(API_KEY);
    const response = await buildRequest.getAnswer('tell me about yourself');
    console.log('resp', response);
})();
