import React, { useEffect, useState } from 'react'
import * as Loading from '@/components/lottieFiles/Loading.json';
import * as Error from '@/components/lottieFiles/Error.json';
import * as Success from '@/components/lottieFiles/Success.json';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

type Props = {
    fileReader: FileReader
}

export default function Intro ({ fileReader }: Props) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    // handle drag events

    useEffect(() => {
        fileReader.onload = async (e: ProgressEvent<FileReader>) => {
            if (!e || !e?.target) return
            const text = (e.target.result)
            if (!text) return

            const response = await fetch('/api/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ encrypted_data: text.toString() })
            });
            setLoading(false)
            if (response.status != 200) {
                setError(true)
                const err = await response.json();
                setErrorMessage(err.msg);
                return
            }
            const data = await response.json();

            setData(data.msg)
        };

    }, [])

    if (loading) return (
        <div className='flex justify-center items-center h-screen space-y-10'>
            <Player
                src={Loading}
                className="w-full md:w-3/5"
                loop
                autoplay
            />
        </div>
    )

    if (error) {
        return (
            <div className='flex flex-col justify-center items-center space-y-10 h-screen '>
                <Player
                    src={Error}
                    className="w-full md:w-3/5"
                    keepLastFrame={true}
                    autoplay
                />
                <p className='text-4xl' >Authentification Echouée </p>
                <p className='text-xl text-red-500'>{errorMessage}</p>
                <Link
                    className='px-16 p h-12 rounded-full text-xl flex items-center  bg-black hover:bg-[#4f4f8d] text-white cursor-pointer'
                    href='/'
                >Revenir</Link>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-10'>
            <div className='flex flex-col justify-center items-center space-y-10 h-screen text-center '>
                <Player
                    src={Success}
                    className="w-full md:w-3/5"
                    keepLastFrame={true}
                    autoplay
                />
                <p className='text-4xl' >Authentification Réussie </p>
                <div className="grid grid-cols-1 md:grid-cols-2   text-xl md:text-left">
                    <p className="mb-5">Nom de titulaire : <span className='font-bold text-green-500'>{data[0]}</span></p>
                    <p className="mb-5">Date de naissance : <span className='font-bold text-green-500'>{data[1]}</span></p>
                    <p className="mb-5">Type de diplome : <span className='font-bold text-green-500'>{data[2]}</span></p>
                    <p className="mb-5">Date d'obtention :<span className='font-bold text-green-500'>{data[3]}</span></p>
                    <p className="mb-5">Specialité : <span className='font-bold text-green-500'>{data[4]}</span></p>
                </div>
                <Link
                    className='px-16 p h-12 rounded-full text-xl flex items-center  bg-black hover:bg-[#4f4f8d] text-white cursor-pointer'
                    href='/'
                >Revenir</Link>
            </div >
        </div >

    )
}
