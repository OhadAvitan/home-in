import emailjs from '@emailjs/browser';

alert('email-js')
emailjs.init({ publicKey: "G7VPrLPZtTI0HAYKM" });

export function sendEmail(templateParams) {
    return emailjs.send(
        'service_ljmf46p',
        'template_ily1rwj',
        templateParams
    );
}