
// Follow these steps to deploy this Edge Function:
// 1. Run: supabase functions deploy send-email
// 2. Set Gmail credentials in Supabase secrets:
//    supabase secrets set GMAIL_USER=your.email@gmail.com
//    supabase secrets set GMAIL_PASSWORD=your-app-password
//    (Create an App Password at https://myaccount.google.com/apppasswords)

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.8.0/mod.ts";
import { corsHeaders } from "../_shared/cors.ts";

// Get SMTP credentials from environment variables
const GMAIL_USER = Deno.env.get("GMAIL_USER");
const GMAIL_PASSWORD = Deno.env.get("GMAIL_PASSWORD");
const RECIPIENT_EMAIL = "prashantmp264@gmail.com";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Check if SMTP credentials are configured
  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    console.error("Missing SMTP credentials. Please set GMAIL_USER and GMAIL_PASSWORD secrets.");
    return new Response(
      JSON.stringify({ error: "Server configuration error. Please contact the administrator." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse the request body
    const { name, email, subject, message } = await req.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Configure SMTP client
    const client = new SmtpClient();
    
    // Connect to Gmail's SMTP server
    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: GMAIL_USER,
      password: GMAIL_PASSWORD,
    });

    // Format the message subject
    const messageSubject = subject ? subject : "New Contact Form Submission";
    
    // Create HTML email body
    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Create plain text email body (fallback)
    const textBody = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject || "N/A"}
      
      Message:
      ${message}
    `;

    // Send the email
    await client.send({
      from: GMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${messageSubject}`,
      content: "text/html",
      html: htmlBody,
      text: textBody,
    });

    // Close the connection
    await client.close();

    // Return success response
    return new Response(
      JSON.stringify({ status: "OK" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
