import { useState, useEffect } from 'react'
import './styles/App.css';

export default function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        let updateConnectionStatus = (status) => {
            setIsOnline(status)
        };

        window.addEventListener('online', () => updateConnectionStatus(true))
        window.addEventListener('offline', () => updateConnectionStatus(false))

        return () => {
            window.removeEventListener('online', updateConnectionStatus)
            window.removeEventListener('offline', updateConnectionStatus)
        }

    }, []);

    return (
        <div className={'status-' + (isOnline ? 'online' : 'offline')}>
            <p>{isOnline ? '✅ Estás conectado a internet' : '❌ Sin conexión'}</p>
        </div>
    )
}
