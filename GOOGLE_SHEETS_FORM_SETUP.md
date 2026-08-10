# Google Sheets contact-form setup

1. Create or open the Google Sheet that should receive enquiries.
2. Open **Extensions → Apps Script**.
3. Replace the editor content with [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
4. Select the `setup` function and click **Run** once. Approve the requested Sheet and email permissions.
5. Select **Deploy → New deployment → Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Deploy and copy the URL ending in `/exec`.
8. In Vercel, add a Production environment variable named `GOOGLE_SHEETS_WEB_APP_URL` with that URL as its value.
9. Redeploy the website, then submit one test enquiry.

Every valid submission is appended to an `Enquiries` tab and an email notification is sent to `info@consciousrise.in`. Replying to that notification addresses the person who submitted the form.

If you edit `Code.gs` later, create a new deployment version from **Deploy → Manage deployments** so the live endpoint receives the update.
