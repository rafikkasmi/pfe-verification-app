import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";
import { QrScanner } from '@yudiel/react-qr-scanner';
import Navbar from '@/components/organ/Navbar';
import Intro from '@/components/scanQR/Intro';
import ScanningPage from '@/components/scanQR/ScanningPage';
import Results from '@/components/scanQR/Results';


export default function ScanQr () {

    const [step, setStep] = useState(0);

    return (
        <div className='container mx-auto min-h-screen'>

            <Step step={step} setStep={(step) => setStep(step)} />

        </div>
    );
};


function Step ({ step, setStep }: { step: number, setStep: (step: number) => void }) {

    const [qrData, setQrData] = useState('');

    switch (step) {
        case 0:
            return <Intro nextStep={() => setStep(1)}
            />;
        case 1:
            return <ScanningPage nextStep={() => setStep(2)} setQrData={(data: string) => setQrData(data)} />;
        case 2:
            return <Results qrData={qrData} />;
        default:
            return null;
    }
}



