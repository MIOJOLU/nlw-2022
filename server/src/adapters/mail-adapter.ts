export interface SendMailData {
    subject: string,
    body: string
}

export interface MailAdadpter {
    sendMail: (data: SendMailData) => Promise<void>
}