# Prana Brain and Nerve Health – Website

## Run it (3 commands)
1. Install Node.js 18+ from https://nodejs.org
2. In this folder:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

Entry point: `index.html` -> `src/main.tsx` -> `src/App.tsx` (routes: / /about /services /contact /career)

## Make the Contact form deliver to infopbnhealth@gmail.com
1. Go to https://web3forms.com, enter `infopbnhealth@gmail.com`, click "Create Access Key".
2. Open the email they send to that inbox and copy the access key.
3. Copy `.env.example` to `.env` and paste the key after `VITE_WEB3FORMS_KEY=`.
4. Restart `npm run dev`. Submit the form: the message arrives in the Gmail inbox.
5. On your hosting (Netlify/Vercel/etc.) add the same variable `VITE_WEB3FORMS_KEY`, then rebuild.

Production build: `npm run build` (output in `dist/`).
