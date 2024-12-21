import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  sendMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  sendMessage,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1>New Message Recieved</h1>
    <p><strong>Name or Business:</strong> {firstName}</p>
    <p><strong>Phone Number:</strong> {lastName}</p>
    <p><strong>Email Address:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{sendMessage}</p>
  </div>
);

