import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Display from './Display';

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(keyPressed || null);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setInputValue((prevInputValue) => {
            const input = event.target.value;
            if (input.length > 0) {
                setKey(input[input.length - 1]);
            }
            return input;
        });
    };

    const handleKeyDown = (event) => {
        if (isMobile) {
            setKey(event.key);
            setInputValue('');
            event.target.blur();
            event.stopPropagation();
        }
    };

    useEffect(() => {
        const setFocus = () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };
        setFocus();

        // Cleanup on unmount
        return () => {
            if (inputRef.current) {
                inputRef.current.blur();
            }
        };
    }, []);

    return (
        <section className="bg-gray-900 text-white h-screen flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>
                    {isMobile ? <input type="text" className="mt-6 border p-2 text-xl" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} autoFocus /> : <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>}
                    <Display keyPressed={key || keyPressed} />
                </div>
            </div>
        </section>
    );
}
