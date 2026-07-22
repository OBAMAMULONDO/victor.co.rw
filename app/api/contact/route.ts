
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service: "gmail" , 
    auth: {
        user: process.env.EMAIL_USER , 
        pass: process.env.EMAIL_PASSWORD_APP
    }
})

function emailTemplate (username: string, email: string, message: string) {

    return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
    </head>
    <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #18181b;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
        <!-- Header -->
        <tr>
          <td style="background-color: #09090b; padding: 24px; text-align: left;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Message</h1>
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td style="padding: 24px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding-bottom: 12px; font-size: 14px;">
                  <strong style="color: #71717a;">From:</strong> ${username}
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 16px; font-size: 14px;">
                  <strong style="color: #71717a;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>

            <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 16px 0;" />

            <p style="font-size: 14px; font-weight: 600; color: #71717a; margin-top: 0; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap;">${message}</div>

            <!-- Call to Action Note -->
            <div style="margin-top: 24px; padding: 12px; background-color: #eff6ff; border-radius: 6px; font-size: 13px; color: #1e40af;">
              💡 <strong>Tip:</strong> You can hit <strong>Reply</strong> directly in your email client to respond to ${username}.
            </div>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `
}

export async function POST(req: NextRequest) {

    try {
        // validate the request body to ensure it contains the necessary fields

        const body = await req.json().catch(() => null);

        if(!body){
            return NextResponse.json({error: "No data provided"}, {status: 400})
        }

        // validate the username , email and message fields

        const {username , email , message } = body ; //this will destructure the username , email and message fields from the request body

        if(!username || !email || !message) {
            return NextResponse.json({error: "Please fill in all fields"}, {status: 400})
        }

        // validate the email format using a regular expression
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        

        if(!emailRegex.test(email)) {
            return NextResponse.json({error: "Invalid email , Please type a valid email address"}, {status: 400});

        }
     
        // once valid each and every field , send the email to the specified recipient sanitise them

        const sanitizedUsername = username.trim();
        const sanitizedEmail = email.trim();
        const sanitizedMessage = message.trim();

        // send the email using nodemailer

        await transporter.sendMail({
            from : sanitizedEmail , 
            to: process.env.EMAIL_USER ,
            subject: `New reply on your portfolio from ${sanitizedUsername}`,
            replyTo: sanitizedEmail,

            html : emailTemplate(sanitizedUsername , sanitizedEmail , sanitizedMessage)
        });

        return NextResponse.json({message: "Email sent successfully"}, {status: 200});

        
        
    } catch (error) {

        console.error("Error sending email:", error);
        return NextResponse.json({error: "Failed to send email"}, {status: 500});
        
    }
}