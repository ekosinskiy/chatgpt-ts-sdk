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

## API

#### setAiModel(aiModel: string): void

Set AI model, right now the latest AI model is **gpt-3.5-turbo**.
It used by default.

#### setRole(role: ChatGptRoles): void

Set role for message. Possible roles are "system", "user", or "assistant".
There is pre-defined enum with values. It calls **ChatGptRoleList**

#### addMessage(role: ChatGptRoles, content: string): void

Add message which will be sent to ChatGPT.

#### getAnswer(content: string): Promise<ChatGptResponse>

Get answer for single request. Response example is:
```json
{
 "id": "chatcmpl-6p9XYPYSTTRi0xEviKjjilqrWU2Ve",
 "object": "chat.completion",
 "created": 1677649420,
 "model": "gpt-3.5-turbo",
 "usage": {"prompt_tokens": 56, "completion_tokens": 31, "total_tokens": 87},
 "choices": [
   {
    "message": {
      "role": "assistant",
      "content": "The 2020 World Series was played in Arlington, Texas at the Globe Life Field, which was the new home stadium for the Texas Rangers."},
    "finish_reason": "stop",
    "index": 0
   }
  ]
}
```

#### processMultipleMessages(): Promise<ChatGptResponse>

Get answer for multiple request.

## Usage

#### Single request
```ts
const buildRequest = new BuildRequest('MY_GPT_API_KEY');
const response = await buildRequest.getAnswer('tell me about yourself');
```

#### Multiple requests

```ts
const buildRequest = new BuildRequest('MY_GPT_API_KEY');
buildRequest.addMessage(ChatGptRoleList.SYSTEM, 'tell me about yourself');
buildRequest.addMessage(ChatGptRoleList.USER, 'Translate from English to French');
const response = await buildRequest.processMultipleMessages();
```
