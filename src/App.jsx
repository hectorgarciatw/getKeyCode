import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
    const [key, setKey] = useState(null);
    const [isKeyboardActive, setIsKeyboardActive] = useState(false);

    useEffect(() => {
        if (isMobile) {
            const handleFocusIn = () => {
                // El teclado aparece
                setIsKeyboardActive(true);
            };
            const handleFocusOut = () => {
                // El teclado desaparece
                setIsKeyboardActive(false);
            };

            window.addEventListener('focusin', handleFocusIn);
            window.addEventListener('focusout', handleFocusOut);

            return () => {
                window.removeEventListener('focusin', handleFocusIn);
                window.removeEventListener('focusout', handleFocusOut);
            };
        }
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const handleKeyDown = (event) => {
                setKey(event.key.toLowerCase());
            };
            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, []);

    return (
        <div className={`relative min-h-screen ${isKeyboardActive ? 'keyboard-active' : ''}`}>
            <div>
                <Content keyPressed={key} setKey={setKey} />
            </div>
            <Footer className="absolute bottom-0 left-0 w-full mt-20" />
        </div>
    );
}

export default App;
