import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from "./QRCodeScanner.module.css"

export const QRCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler =(result) => {
        setScanned(result[0].rawValue);
    };

    const settings = {
        audio: false,
        finder: true,
    };

    return (
        <div className={s.container}>
            <Scanner allowMultiple 
                onScan={scanHandler}
                components={settings}
                styles={{
                    container: { width: 200 },
                }}
            />
            <div className={s.result}>{scanned}</div>
        </div>
    );
}