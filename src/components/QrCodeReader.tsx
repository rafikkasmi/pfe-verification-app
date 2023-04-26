import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from "@zxing/library";
import { useRef, useEffect } from "react";


export const QrCodeReader = () => {
    const hints = new Map();
    const enabledFormats = [
        // ...ALL_FORMATS_WHICH_YOU_WANT_TO_ENABLE
        BarcodeFormat.QR_CODE
    ];
    hints.set(DecodeHintType.POSSIBLE_FORMATS, enabledFormats);
    const videoRef = useRef<HTMLVideoElement>(null);
    const reader = useRef(new BrowserMultiFormatReader(hints));

    useEffect(() => {
        if (!videoRef.current) return;
        reader.current.decodeFromConstraints(
            {
                audio: false,
                video: {
                    facingMode: 'environment',
                },
            },
            videoRef.current,
            (result, error) => {
                if (result) alert(result);
                if (error) console.log(error);
            }
        );
        return () => {
            reader.current.reset();
        }
    }, [videoRef]);

    return <video ref={videoRef} />;
};