import { google } from "googleapis";
import readline from "readline";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:\n", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the code from that page here: ", async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Access Token:", tokens.access_token);
  console.log("Refresh Token:", tokens.refresh_token);
  rl.close();
});
