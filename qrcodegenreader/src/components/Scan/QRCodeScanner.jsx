import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from "./QRCodeScanner.module.css"
import { SCAN_DATA } from "../../constants"

export const QRCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler =(result) => {
        const data = result[0].rawValue;
        setScanned(data);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, data])
        );
    }; 

    return (
        <div className={s.container}>
            <Scanner 
                allowMultiple 
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: true,
                }}
                styles={
                    {container: 
                        { width: 200 },
                    }
                }
            />
            <div className={s.result}>{scanned}</div>
        </div>
    );
}