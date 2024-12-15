# Project description.

OneOuts it's my Assignment for the Frontend Developer position.
I did additional flow like:
- Published project on Vercel: https://one-outs-stanpribylnovs-projects.vercel.app/
- Customized and set up the auth0 flow for real domain
- Integrated with RAWG API
- Game Details page( + request to get real data)
- Store Details page( + request to get real data)
- Creator/Leaderbord Details page( + request to get real data)

## Getting Started(local server)
The project setup is simple to use, but project contains senstive data like my RAWG API key(i will not share it with u) and
Auth0 client id and secret, so you need to create your own Auth0 account and get your own client id and secret.

### Few steps to run locally.
**1. Met .env.local structure**

**2. Get your own Rawg API key**

**3. Setup your own Auth0 account and get your own client id and secret.**

If my production link is not enought for you https://one-outs-stanpribylnovs-projects.vercel.app/
**i will help you to set up your own Auth0 account and get your own client id and secret + rawg api key.**

## 1 Met .env.local structure
Example of .env file:
```bash
AUTH0_SECRET=replace-with-your-own-secret-generated-with-openssl
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_AUDIENCE=
AUTH0_SCOPE=
NEXT_PUBLIC_RAWG_API_KEY=
```
All lines is about auth0 integration, and last line is about rawg api key.

## 2. Get your own Rawg API key ##
So let's get your own rawg api key and auth0 client id and secret.
Rawg: https://rawg.io/apidocs - just sign in and get your key for NEXT_PUBLIC_RAWG_API_KEY.

## 3. Setup your own Auth0 account and get your own client id and secret.
Last, but not least, you need to create your own Auth0 account and get your own client id and secret.
https://auth0.com/docs/quickstart/webapp/nextjs - pls follow this instruction to get your own client id and secret and setup your own auth.


# We are ready to run! Appreciate your time and attention.

Install dependencies
```bash
npm install
```
Run llocal server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
