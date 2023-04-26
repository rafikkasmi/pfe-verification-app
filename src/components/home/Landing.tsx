import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import * as Blockchain from '@/components/lottieFiles/BlockChain.json';
export default function Landing () {
    return (
        <div className='container  mx-auto'>
            <div className='flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-[calc(100vh-64px)] '>
                <Player
                    src={Blockchain}
                    className="z-0 w-4/5 md:w-full "
                    loop
                    autoplay
                />
                <div className='flex flex-col items-center justify-center md:w-1/2 text-center md:text-left max-w-xl space-y-10'>
                    <h1 className="text-5xl md:text-7xl">Assurer Votre Confiance</h1>
                    <p className='text-lg md:text-xl w-4/5 md:w-full'>Authentifier les diplomes que vous receuvez a l'aide de notre platforme</p>
                </div>

            </div>
        </div>
    )
}
