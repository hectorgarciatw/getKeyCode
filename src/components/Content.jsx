import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Display from './Display';

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(null);

    // Manejar el evento keydown
    const handleKeyDown = (event) => {
        if (isMobile) {
            // Captura la tecla presionada
            setKey(event.key);
            event.target.value = ''; // Limpia el input
            // Cerrar el teclado virtual después de presionar
            event.target.blur();
        }
    };

    return (
        <section className="bg-gray-900 text-white h-screen flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>
                    {isMobile ? (
                        <input type="text" style={{ textAlign: 'center' }} className="mt-6 border p-2 text-xl" onKeyDown={handleKeyDown} placeholder="Press a key please..." autoFocus />
                    ) : (
                        <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>
                    )}
                    <Display keyPressed={key || keyPressed} />
                </div>
            </div>
        </section>
    );
}
