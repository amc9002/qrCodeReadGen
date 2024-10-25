import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from "../constants"

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return(
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