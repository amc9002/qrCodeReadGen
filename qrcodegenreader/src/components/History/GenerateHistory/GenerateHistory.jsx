import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from "../../../constants"
import s from "../history.module.css";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return(
        <div>
            {data.map((text) => 
                <div className={s.list} key={text}>
                    <QRCodeSVG value={text} size={50} /> 
                    <span className={s.text}>{text}</span>
                </div>
            )}
        </div>
    );
}