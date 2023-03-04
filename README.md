# Chat GPT TypeScript API

ChatGPT API is a powerful tool developed on TypeScript that allows developers to easily integrate natural language processing capabilities into their applications. 
As a large language model trained by OpenAI, ChatGPT is capable of understanding and generating human-like responses to a wide variety of queries.


With the ChatGPT API, developers can easily create conversational interfaces that can understand and respond to natural 
language queries in a way that feels intuitive and natural to users. 
This makes it an ideal tool for building chatbots, virtual assistants,
and other applications that rely on natural language processing.

Because ChatGPT API is built on TypeScript,
developers can take advantage of its strong typing and other features that make 
it easier to write reliable and maintainable code. 


## Install

Run next command

```shell
npm i ts-chatgpt-api
```
## How to get my ChatGPT API key

* Create account and login by this [link](https://platform.openai.com/)
* Go to Manage Account -> API Keys or go to this [link](https://platform.openai.com/account/api-keys)
* Create new secret key by clicking **+ Create new secret key**

## Usage

```ts
const buildRequest = new BuildRequest('MY_GPT_API_KEY');
const response = await buildRequest.getAnswer('tell me about yourself');
```
