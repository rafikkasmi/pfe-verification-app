import React, { useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner';
import Link from 'next/link';

type Props = {
    nextStep: () => void
    setQrData: (data: string) => void
}

export default function ScanningPage ({ nextStep, setQrData }: Props) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className='flex flex-col justify-center items-center space-y-10 h-screen'>
                <p>Erreur, S'il vous plait verifier les permissions de la camera , sinon ressayer apres quelques instants</p>
                <Link
                    className='px-16 p h-12 rounded-full text-xl flex items-center  bg-[#8080bd] hover:bg-[#4f4f8d] text-white cursor-pointer'
                    href='/'
                >Revenir</Link>
            </div>
        )
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen' >
            <div className='w-4/5 md:w-1/2 max-w-xl'>
                <QrScanner
                    onDecode={(result) => {
                        setQrData(result)
                        nextStep()
                    }}
                    onError={(error) => {
                        setError(true)
                    }}
                />
            </div>
        </div>
    )
}
