import React from 'react';
import { isMobile } from 'react-device-detect';
import Display from './Display';

export default function Content({ keyPressed }) {
    return (
        <section className="bg-gray-900 text-white h-screen flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>
                    {isMobile ? (
                        // Input visible solo en dispositivos móviles
                        <input type="text" className="mt-6 border p-2 text-xl" onChange={(e) => (e.target.placeholder = 'Press a key...')} placeholder="Press a key..." autoFocus />
                    ) : (
                        <p className="mt-6 text-xl">Press the key you want to get the keycode for.</p>
                    )}
                    <Display keyPressed={keyPressed} />
                </div>
            </div>
        </section>
    );
}
