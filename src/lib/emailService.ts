import nodemailer from 'nodemailer';

const EMAIL_USER = 'vertexbozemancontact@gmail.com';
const EMAIL_PASS = 'phff xqpr pxdr gezd';
const EMAIL_RECIPIENT = 'underwood.brady@gmail.com'

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
});

export async function sendEmail(subject: string, text: string, html: string) {
  try {
    await transporter.sendMail({
      from: `"sprucestaging.com" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject,
      text,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}