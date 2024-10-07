import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Display from './Display';

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(null);
    // Para manejar la visibilidad del teclado
    const [keyboardActive, setKeyboardActive] = useState(false);

    const handleInput = (event) => {
        const input = event.target.value;
        if (input.length > 0) {
            setKey(input[input.length - 1]);
        }
    };

    const handleKeyDown = (event) => {
        if (isMobile) {
            setKey(event.key);
            event.target.value = '';
        }
    };

    useEffect(() => {
        const adjustForKeyboard = () => {
            // Detecta que el teclado está activo
            setKeyboardActive(true);
        };

        const resetForKeyboard = () => {
            // Detecta que el teclado está inactivo
            setKeyboardActive(false);
        };
        // Cuando aparece el teclado
        window.addEventListener('focusin', adjustForKeyboard);
        // Cuando desaparece
        window.addEventListener('focusout', resetForKeyboard);

        return () => {
            window.removeEventListener('focusin', adjustForKeyboard);
            window.removeEventListener('focusout', resetForKeyboard);
        };
    }, []);

    return (
        <section className={`bg-gray-900 text-white h-screen flex items-center ${keyboardActive ? 'keyboard-active' : ''}`}>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className={`mx-auto max-w-3xl text-center ${keyboardActive ? 'keyboard-adjust' : ''}`}>
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>
                    {isMobile ? (
                        <input type="text" className="mt-6 border p-2 text-xl" onInput={handleInput} onKeyDown={handleKeyDown} placeholder="Presiona una tecla" autoFocus />
                    ) : (
                        <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>
                    )}
                    <Display keyPressed={key || keyPressed} />
                </div>
            </div>
        </section>
    );
}
