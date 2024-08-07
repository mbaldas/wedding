'use server';
import { Resend } from 'resend';

export const sendEmail = async (selectedPeople) => {
  const emailContent = `
    <p>You have confirmed the following people for the wedding:</p>
    <ul>${selectedPeople
      .map((person) => `<li>${person.name}</li>`)
      .join('')}</ul>
  `;

  const resend = new Resend('re_4i3VZW1A_364RoEFTuCgYzaNkT4Rj7AP2');

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adrielematoso@outlook.com',
    subject: 'RSVP - Wedding Confirmation',
    html: emailContent,
  });
};

export const sendMessage = async (person, message) => {
  const emailContent = `
    <p>${person} enviou a seguinte mensagem: ${message}</p>
  `;

  const resend = new Resend('re_4i3VZW1A_364RoEFTuCgYzaNkT4Rj7AP2');

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adrielematoso@outlook.com',
    subject: 'RSVP - Wedding Message',
    html: emailContent,
  });
};

export const sendGift = async (person, gift) => {
  const emailContent = `
    <p>${person} comprou o seguinte presente: ${gift}</p>
  `;

  const resend = new Resend('re_4i3VZW1A_364RoEFTuCgYzaNkT4Rj7AP2');

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adrielematoso@outlook.com',
    subject: 'RSVP - Wedding Gift',
    html: emailContent,
  });
};
