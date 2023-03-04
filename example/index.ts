import BuildRequest from '../src/build-request';

const API_KEY = 'YOU_CHAT_GPT_API';


(async () => {
    const buildRequest = new BuildRequest(API_KEY);
    const response = await buildRequest.getAnswer('write a short story about space');
    console.log('resp', JSON.stringify(response, null, 4));
})();
