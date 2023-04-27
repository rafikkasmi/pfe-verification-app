import React from 'react'
import * as QrScan1 from '@/components/lottieFiles/QrScan1.json';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
    nextStep: () => void
}

export default function Intro ({ nextStep }: Props) {
    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-10'>
            <Player
                src={QrScan1}
                className="w-full md:w-56"
                loop
                autoplay
            />
            <div className='flex flex-col items-center justify-center w-4/5 md:w-1/2 text-center max-w-xl space-y-10'>
                <p className='text-lg md:text-xl'>Veuillez Autoriser l'utilisation de la camera pour continuer,  puis positionner le  QR de votre document dans le champ de vision de la camera </p>
                <button
                    className='px-16 p h-12 rounded-full text-xl  bg-[#8080bd] hover:bg-[#4f4f8d] text-white cursor-pointer'
                    onClick={() => nextStep()}
                >Continuer</button>
            </div>

        </div>

    )
}
