// components/email/ConfirmationEmailTemplate.tsx
import * as React from 'react';

interface ConfirmationEmailProps {
  firstName: string;
  sendMessage: string;
}

export const ConfirmationEmailTemplate: React.FC<ConfirmationEmailProps> = ({
  firstName,
  sendMessage,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1>Thank You for Reaching Out!</h1>
    <p>Dear {firstName},</p>
    <p>Thank you for contacting Foundwell Services. We’ve received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong></p>
    <p>{sendMessage}</p>
    <p>If you have any urgent questions, feel free to email us at efounds@foundwellservices.com</p>
    <p>Best regards,</p>
    <p>The Foundwell Services Team</p>
  </div>
);

