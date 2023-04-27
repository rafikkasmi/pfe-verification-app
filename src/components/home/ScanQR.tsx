import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import * as QrScan from '@/components/lottieFiles/QrScan.json';
import Link from 'next/link';
export default function ScanQR () {
    return (
        <div className='container  mx-auto'>
            <div className='flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-[calc(100vh-64px)] '>
                <Player
                    src={QrScan}
                    className="z-0 w-full max-w-2xl"
                    loop
                    autoplay
                />
                <div className='flex flex-col items-center justify-center w-4/5 md:w-1/2 text-center max-w-xl space-y-10'>
                    <h1 className="text-4xl">Juste un simple scan</h1>
                    <p className='text-lg md:text-xl'>Scanner le QR dans le document , et recois les données de la BlockChain , et confirme vous-meme</p>
                    <Link href="/scan-qr" className='flex items-center px-16 p h-12 rounded-full text-xl  bg-[#8080bd] hover:bg-[#4f4f8d] text-white cursor-pointer'>Continuer</Link>
                </div>

            </div>
        </div>
    )
}
