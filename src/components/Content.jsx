import React, { useState, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Display from "./Display";

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isMobile && inputRef.current) {
            // Enfocar el input automáticamente en móviles
            inputRef.current.focus();
        }
    }, []);

    const handleKeyDown = (event) => {
        if (isMobile) {
            setKey(event.key);
            event.target.value = "";
        }
    };

    const handleTouchStart = () => {
        if (isMobile && inputRef.current) {
            // Forzar enfoque en el input cuando se toca la pantalla
            inputRef.current.focus();
        }
    };

    return (
        <section className="bg-gray-900 text-white h-screen flex items-center" onTouchStart={handleTouchStart}>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>
                    {isMobile ? (
                        <div className="mt-6 text-xl">
                            <p>Toca la pantalla y presiona una tecla</p>
                            <input ref={inputRef} type="text" className="text-center mt-4 border p-2 text-xl opacity-50" onKeyDown={handleKeyDown} placeholder="Presiona una tecla" aria-label="Tecla presionada" />
                        </div>
                    ) : (
                        <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>
                    )}
                    <Display keyPressed={key || keyPressed} />
                </div>
            </div>
        </section>
    );
}
