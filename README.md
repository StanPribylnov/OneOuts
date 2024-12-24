# Project description.

OneOuts it's my Assignment for the Frontend Developer position.
I did additional flow like:
- Published project on Vercel: https://one-outs.vercel.app/
- nextauth + google provider(could add any provider)
- Integrated with RAWG API
- Game Details page( + request to get real data)
- Store Details page( + request to get real data)
- Creator/Leaderbord Details page( + request to get real data)

## Getting Started(local server)
The project setup is simple to use, but project contains senstive data like my RAWG API key(i will not share it with u) and
google client id and secret, so you need to create your own google account and get your own client id and secret.

### Few steps to run locally.
**1. Met .env.local structure**

**2. Get your own Rawg API key**

**3. Setup your own google account and get your own client id and secret.**

If my production link is not enought for you https://one-outs.vercel.app/
**i will help you to set up your own google account and get your own client id and secret + rawg api key.**

## 1 Met .env.local structure
Example of .env file:
```bash
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_RAWG_API_KEY=
```

## 2. Get your own Rawg API key ##
So let's get your own rawg api key and google provider client id and secret.
Rawg: https://rawg.io/apidocs - just sign in and get your key for NEXT_PUBLIC_RAWG_API_KEY.

## 3. Setup your own google account and get your own client id and secret.
Last, but not least, you need to create your own google account and get your own client id and secret.
https://next-auth.js.org/providers/google - pls follow this instruction to get your own client id and secret and setup your own auth.


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
