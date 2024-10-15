import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import s from "./QRCodeGenerator.module.css" 

export const QRCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    //useState returns array with 2 elements:
    //  [0] - current value, 
    //  [1] - rewrite function(argument - new value)

    const onClickHandler = (e) => {
        setResult(value);
        setValue('');
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value); // rewrite page with new value 
        setResult('');
    }

    return (
        <div>
            {result !== '' && <QRCodeSVG value={result} />}
            <input className={s.input} type="text" 
                placeholder="Enter text"
                value={value}
                onChange={onChangeHandler}
            />

            <button type="button" onClick={onClickHandler}>
                Generate QR code
            </button>
        </div>
    );
}