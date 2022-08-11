import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import emojiImageUrl from '../../assets/emoji.png'
import { FeedbackTypeStep } from "./components/FeedBackTypeStep";
import { FeedbackConentStep } from "./components/FeedbackConentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";
export const feedbacksTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: emojiImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedBackType = keyof typeof feedbacksTypes

export function WidgetForm(){
    function handleRestartFeedback(){
        setFeedBackSent(false)
        setFeedbackType(null)
    }
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)
    const [feedbackSent, setFeedBackSent] = useState(false);
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col
        items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested = {handleRestartFeedback}/>
            ) :
                <>
                    {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}></FeedbackTypeStep>
            ) : (
               <FeedbackConentStep 
                feedbackType = {feedbackType} 
                onFeedbackRestartRequested = {handleRestartFeedback}
                onFeedbackSent = {() => setFeedBackSent(true)}
               ></FeedbackConentStep>
            )}
                </>
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/MIOJOLU" target="_blank">Miojolu</a>
            </footer>
        </div>
    );
}
