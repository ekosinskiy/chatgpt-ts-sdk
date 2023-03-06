import BuildRequest from '../src/build-request';
import {API_KEY} from './api-key';

(async () => {
    const buildRequest = new BuildRequest(API_KEY);
    const response = await buildRequest.getAnswer('write a short story about space');
    console.log('resp', JSON.stringify(response, null, 4));
})();
