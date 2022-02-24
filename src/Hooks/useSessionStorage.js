import { useState, useEffect } from 'react';

function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
}

export function useSessionStorage(key, defaultValue) {
    const [sessionData, setSessionData] = useState(
        getSessionStorageOrDefault(key, defaultValue)
    );

    useEffect(() => sessionStorage.setItem(key, JSON.stringify(sessionData)), [key, sessionData]);

    const deleteKeyData = (delteKey) => sessionStorage.removeItem(delteKey);
    const clearSessionStorage = () => { sessionStorage.clear(); setSessionData(false) }

    return [sessionData, setSessionData, clearSessionStorage, deleteKeyData];
}