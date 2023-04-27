import React, { useState, useRef } from 'react'
import * as DragDropUpload from '@/components/lottieFiles/DragDropUpload.json';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
    nextStep: () => void
    fileReader: FileReader
}

export default function Intro ({ nextStep, fileReader }: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragActive, setDragActive] = useState(false);
    // handle drag events
    const handleDrag = function (e: React.DragEvent<HTMLFormElement> | React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e: React.DragEvent<HTMLFormElement> | React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something

            fileReader.readAsText(e.dataTransfer.files[0])
            nextStep()
        }
    };

    const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        if (!e || !e.target?.files || !e.target.files[0]) return

        fileReader.readAsText(e.target.files[0])
        nextStep()

    }

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-10'>
            <form
                className={`relative flex flex-col items-center justify-center border border-[0.5px]  w-4/5 md:w-1/2 rounded-xl shadow-sm py-20 cursor-pointer transition ${dragActive && "shadow-xl"}`}
                onDragEnter={handleDrag}
                onClick={() => fileInputRef?.current?.click()}
            >
                <input className='none' hidden ref={fileInputRef} onChange={handleFileChange} type="file" />
                <Player
                    src={DragDropUpload}
                    className="w-full md:w-3/5"
                    loop
                    autoplay
                />
                <p className='text-lg md:text-xl'>Glisser , ou cliquez sur la zone pour selectionner le fichier digital '.usthb' ,  </p>
                {dragActive && <div className='absolute inset-0 w-full h-full rounded-xl' onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
            </form>

        </div>

    )
}
