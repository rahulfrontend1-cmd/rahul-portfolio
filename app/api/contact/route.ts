import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { name, email, phone, nationality, destination, dates, group, message } = await req.json();

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      access_token: process.env.GOOGLE_ACCESS_TOKEN,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    oAuth2Client.on("tokens", (tokens) => {
      if (tokens.refresh_token) console.log("New refresh token:", tokens.refresh_token);
      if (tokens.access_token) console.log("New access token:", tokens.access_token);
    });

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const rawMessage = [
      `From: Rahul Portfolio <rahul.javascript1@gmail.com>`,
      `To: rahul.javascript1@gmail.com`,
      `Subject: Rahul Portfolio  New Contact from ${name}`,
      "Content-Type: text/html; charset=utf-8",
      "",
      `<!DOCTYPE html>
    <html>
    <head><style>
      body { font-family: Arial, sans-serif; color: #111; background: #f9f9f9; margin: 0; padding: 0; }
      .wrap { max-width: 600px; margin: 40px auto; background: #fff; border-top: 4px solid #B8860B; }
      .header { background: #0A1628; padding: 24px 32px; display: flex; align-items: center; }
      .header h1 { color: #B8860B; font-size: 22px; margin: 0; }
      .body { padding: 32px; }
      .row { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
      .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px; }
      .value { font-size: 15px; color: #111; }
      .footer { background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #aaa; }
    </style></head>
    <body>
      <div class="wrap">
        <div class="header"><h1>📩 Rahul Portfolio — New Contact</h1></div>
        <div class="body">
          <div class="row"><div class="label">Name</div><div class="value">${name}</div></div>
          <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
          <div class="row"><div class="label">Phone / WhatsApp</div><div class="value">${phone || 'Not provided'}</div></div>
          <div class="row"><div class="label">Message</div><div class="value">${message || 'No message'}</div></div>
        </div>
        <div class="footer">Sent from rahuljavascript.xyz contact form</div>
      </div>
    </body>
    </html>`,
    ].join("\n");
    

    const encodedMessage = Buffer.from(rawMessage, "utf-8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}