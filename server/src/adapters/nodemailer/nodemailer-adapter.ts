import { MailAdadpter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "72cfc565576a71",
      pass: "53b6b3d201a629"
    }
});

export class NodemailerAdapter implements MailAdadpter {
    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Luiza Silva <luizaparente10@hotmail.com>',
        subject,
        html: body
        })
    }
}