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

Edit the `.env` file and add the following key value pairs:
```
GEMINI_API_KEY=<Gemini API Key>
DB_USER=<MongoDB user name>
DB_PASSWORD=<MongoDB user password>
DB_NAME=<MongoDB Database name>
DB_URI=<MongoDB URI to connect that uses the DB_USER, DB_PASSWORD, and DB_NAME variables>
```

It will install all of the required python packages and start the FastAPI dev server with hot reload

## System Architecture
![draft_diagram](https://github.com/bktfuture/gemini-hack/assets/62050214/87b00886-0162-412a-8307-95ea30f7612c)




