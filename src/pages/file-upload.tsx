import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";
import { QrScanner } from '@yudiel/react-qr-scanner';
import Navbar from '@/components/organ/Navbar';
import Intro from '@/components/fileUpload/Intro';
import Results from '@/components/fileUpload/Results';


export default function ScanQr () {

    const [step, setStep] = useState(0);

    return (
        <div className='container mx-auto min-h-screen'>

            <Step step={step} setStep={(step) => setStep(step)} />

        </div>
    );
};


function Step ({ step, setStep }: { step: number, setStep: (step: number) => void }) {

    const [fileReader, setFileReader] = useState<FileReader>();

    // const fileReader = new FileReader();
    useEffect(() => {
        setFileReader(new FileReader)
    }, []);

    if (!fileReader) return null

    switch (step) {
        case 0:
            return <Intro nextStep={() => setStep(1)} fileReader={fileReader}
            />;
        case 1:
            return <Results fileReader={fileReader} />;
        default:
            return null;
    }
}



