import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from "../constants";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div>
            {data.map((text) => {
                <div key={text}>
                    <QRCodeSVG value={text} size={50} /> 
                    {text}
                </div>
            })}
        </div>
    );
}