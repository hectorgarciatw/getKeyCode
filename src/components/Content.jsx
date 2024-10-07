import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Display from './Display';

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(null);

    // Manejar cuando el usuario escribe en el input
    const handleChange = (event) => {
        alert(`Recibo en handleChange: ${event.target.value}`);
        const input = event.target.value;
        if (input.length > 0) {
            setKey(input[input.length - 1]);
        }
    };

    // Manejar el evento keydown
    const handleKeyDown = (event) => {
        if (isMobile) {
            setTimeout(() => {
                alert(`Recibo en handleKeyDown: ${event.target.value}`);
                // Captura la tecla presionada
                setKey(event.key);
                event.target.value = ''; // Limpia el input
                // Cerrar el teclado virtual después de presionar
                event.target.blur();
            }, 0); // Retardamos la ejecución a la siguiente iteración del event loop
        }
    };

    // Efecto para ajustar el scroll cuando el teclado virtual aparece
    useEffect(() => {
        const adjustForKeyboard = () => {
            window.scrollTo(0, document.body.scrollHeight);
        };

        window.addEventListener('focusin', adjustForKeyboard);
        window.addEventListener('focusout', () => window.scrollTo(0, 0));

        return () => {
            window.removeEventListener('focusin', adjustForKeyboard);
            window.removeEventListener('focusout', () => window.scrollTo(0, 0));
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
                    {isMobile ? <input type="text" className="mt-6 border p-2 text-xl" onChange={handleChange} onKeyDown={handleKeyDown} autoFocus /> : <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>}
                    <Display keyPressed={key || keyPressed} />
                </div>
            </div>
        </section>
    );
}
