'use server';

import { Resend } from 'resend';

// Initialize Resend. If RESEND_API_KEY is not defined, we fail gracefully 
// and log the submissions in the console, facilitating local development.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const details = formData.get('details') as string;

  // Basic server-side validation
  if (!name || !phone || !details) {
    return { success: false, error: 'Please fill in all required fields (Name, Phone, and Project Details).' };
  }

  // Graceful fallback for local development or when environment variables are not yet configured
  if (!resend) {
    console.log('--- CONTACT FORM SUBMISSION (DEVELOPMENT MODE - RESEND NOT CONFIGURED) ---');
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || 'Not provided'}`);
    console.log(`Details: ${details}`);
    console.log('------------------------------------------------------------------------');
    
    return { 
      success: true, 
      warning: 'Form mock-submitted successfully in development mode! Add RESEND_API_KEY to your environment variables to enable live email delivery.' 
    };
  }

  try {
    // 1. Send notification email to the business email (info@kdttiling.co.uk)
    await resend.emails.send({
      from: 'KDT Tiling Website <website@kdttiling.co.uk>',
      to: 'info@kdttiling.co.uk',
      subject: `New Project Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0b0b0c; border-bottom: 2px solid #22d3ee; padding-bottom: 10px; margin-top: 0;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Phone:</td>
              <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email ? `<a href="mailto:${email}">${email}</a>` : 'Not provided'}</td>
            </tr>
          </table>
          
          <h3 style="color: #0b0b0c; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Project Details:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #22d3ee; white-space: pre-wrap; color: #333; line-height: 1.5;">${details}</div>
          
          <p style="font-size: 11px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            Sent from KDT Tiling Swansea website contact form
          </p>
        </div>
      `
    });

    // 2. Send automated confirmation email to the user (if email was provided)
    if (email) {
      await resend.emails.send({
        from: 'KDT Tiling <info@kdttiling.co.uk>',
        to: email,
        subject: 'We have received your enquiry - KDT Tiling',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #0b0b0c; margin: 10px 0 0 0; font-family: serif; letter-spacing: 1px;">KDT <span style="color: #22d3ee;">TILING</span></h2>
              <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">Premium Wall & Floor Tiling</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <p>Hi ${name},</p>
            <p>Thank you for getting in touch with KDT Tiling! We have successfully received your project request.</p>
            <p>Our team will review your details and get back to you as soon as possible (usually within 24 hours) to discuss your project or schedule a free quote.</p>
            
            <h3 style="color: #333; margin-top: 25px; font-size: 16px;">Summary of Details Received:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #22d3ee; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0;"><strong>Details:</strong><br/><span style="color: #555; white-space: pre-wrap;">${details}</span></p>
            </div>
            
            <p>If you have any immediate questions, feel free to call us directly at <a href="tel:+447713246545" style="color: #22d3ee; text-decoration: none; font-weight: bold;">+44 7713 246545</a>.</p>
            
            <p style="margin-top: 30px; margin-bottom: 0;">Best regards,</p>
            <p style="margin-top: 5px; font-weight: bold; color: #0b0b0c;">KDT Tiling Swansea</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px 0;" />
            <p style="font-size: 11px; color: #999; text-align: center; margin: 0;">
              This is an automated reply. Please do not reply directly to this email.
            </p>
          </div>
        `
      });
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error in submitContactForm Action:', error);
    return { success: false, error: error.message || 'Failed to send email. Please try again later.' };
  }
}
