
import express from 'express'
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacls-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedback', async (req, res) => {
    const {type, comment, screenshot} = req.body;
    console.log(req.body);
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerAdapter = new NodemailerAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerAdapter);

    await submitFeedbackUseCase.execute({
        type, 
        comment, 
        screenshot
    })
    return res.status(201).send();
})