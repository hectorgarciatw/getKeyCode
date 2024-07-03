import { useState, useEffect } from 'react';
import './App.css';

//Importo los componentes
import Content from './components/Content';

function App() {
    //Estado para alojar la última tecla presionada
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
        <>
            <Content keyPressed={key} />
        </>
    );
}

export default App;
