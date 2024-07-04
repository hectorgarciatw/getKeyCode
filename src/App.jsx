import React, { useState, useEffect } from 'react';
import './App.css';

import Footer from './components/Footer';
import Content from './components/Content';

function App() {
    // Estado para alojar la última tecla presionada
    const [key, setKey] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            setKey(event.key);
            console.log('Tecla presionada:', event.key);
        };

        // Agrega el event listener cuando el componente se monta
        window.addEventListener('keydown', handleKeyDown);

        // Limpieza del effect
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <div>
                {' '}
                {/* Padding bottom para dejar espacio para el footer */}
                <Content keyPressed={key} />
            </div>
            <Footer className="absolute bottom-0 left-0 w-full mt-20" />
        </div>
    );
}

export default App;
