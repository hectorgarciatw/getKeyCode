import React, { useState, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Display from "./Display";

export default function Content({ keyPressed }) {
    const [key, setKey] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isMobile) {
            // Enfocar el input automáticamente en móviles al cargar la página
            inputRef.current.focus();
        }
    }, []);

    const handleKeyDown = (event) => {
        if (isMobile) {
            setKey(event.key);
            // Limpia el input tras presionar una tecla
            event.target.value = "";
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
                        <div className="mt-6 text-xl">
                            <p>Toca la pantalla y presiona una tecla</p>
                            <input ref={inputRef} type="text" className="hidden" onKeyDown={handleKeyDown} aria-label="Tecla presionada" />
                            <div
                                className="editable-area"
                                // Forzar enfoque en móviles
                                onTouchStart={() => inputRef.current.focus()}
                                style={{ height: "1px", width: "1px", opacity: 0 }}
                            ></div>
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
