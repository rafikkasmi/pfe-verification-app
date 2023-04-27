import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import * as DocUpload from '@/components/lottieFiles/DocUpload.json';
import Link from 'next/link';
export default function FileUpload () {
    return (
        <div className='container  mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center w-full min-h-[calc(100vh-64px)] '>
                <Player
                    src={DocUpload}
                    className="z-0 w-full max-w-2xl"
                    loop
                    autoplay
                />

                <div className='flex flex-col items-center justify-center w-4/5 md:w-1/2 text-center max-w-xl space-y-10'>
                    <h1 className="text-4xl">Ou un simple upload</h1>
                    <p className='text-lg md:text-xl w-4/5 md:w-full'>Pour plus de securité , veuiller uploader le fichier '.usthb', et verifier l'authenticité de document </p>
                    <Link href="/file-upload" className='flex items-center px-16 p h-12 rounded-full text-xl   bg-[#8080bd] hover:bg-[#4f4f8d] text-white cursor-pointer'>Continuer</Link>
                </div>

            </div>
        </div>
    )
}
