import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import s from "./QRCodeGenerator.module.css" 
import { GENERATE_DATA } from "../../constants"

export const QRCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    //useState returns array with 2 elements:
    //  [0] - current value, 
    //  [1] - rewrite function(argument - new value)

    const onClickHandler = (e) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value); // rewrite page with new value 
        setResult('');
    }

    return (
        <div className={s.container}>
            
            <input className={s.input} 
                type="text" 
                placeholder="Enter text"
                value={value}
                onChange={onChangeHandler}
            />

            <button type="button" className={s.button} onClick={onClickHandler}>
                Generate QR code
            </button>

            {result !== '' && (
            <div className={s.qrWrapper}>    
                <QRCodeSVG value={result} size={200}/>
            </div>
            )}

        </div>
    );
}