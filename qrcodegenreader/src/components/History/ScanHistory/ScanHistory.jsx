import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from "../../../constants";
import s from "../history.module.css";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
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