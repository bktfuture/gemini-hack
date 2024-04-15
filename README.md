# gemini-hack

## Front-end Dev Setup

Install Node.js

Clone the repo

Run the following commands inside of the repo directory (`gemini-hack`)

```bash
cd nextjs-fastapi
npm install
npm run next-dev
```

This should install the required packages and start a dev instance of Next.js with hot reload

## Back-end Dev Setup

Install Python (preferably 3.11 or 3.12) and Node.js

Clone the repo

Run the following commands inside of the repo directory (`gemini-hack`)

```bash
cd nextjs-fastapi
touch api/.env
npm run fastapi-dev
```

Edit the `.env` file and add your Google Gemini API key under the key value pair `GEMINI_API_KEY=<API KEY HERE>`. Get the Gemini API key [here](https://ai.google.dev)

It will install all of the required python packages and start the FastAPI dev server with hot reload

## System Architecture

![scuffed system architecture diagram](https://github.com/bktfuture/gemini-hack/assets/44078850/44e7b5a1-d80c-4334-9638-f586103f3629)

