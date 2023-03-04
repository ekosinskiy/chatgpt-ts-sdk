import BuildRequest from './build-request';

const API_KEY = 'PUT_YOUR_API_KEY_HERE';


(async () => {
    const buildRequest = new BuildRequest(API_KEY);
    const response = await buildRequest.getAnswer('tell me about yourself');
    console.log('resp', response);
})();
