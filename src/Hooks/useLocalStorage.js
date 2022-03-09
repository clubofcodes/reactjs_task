import { useState } from "react";

const useLocalStorage = (key, initialValues) => {
    const [storedLocalData, setLocalData] = useState(() => {
        try {
            const storedData = window.localStorage.getItem(key); //can be used without window keyword also.
            return storedData ? JSON.parse(storedData) : initialValues;
        }
        catch (error) {
            console.warn("Setting localStorage went wrong: ", error);
            return initialValues;
        }
    });

    const setValueToLocalStorage = (values) => {
        try {
            // const valueToStore = values instanceof Function ? values(storedLocalData) : [...new Map(values.map(value => [JSON.stringify(value), value])).values()];
            const valueToStore = [...new Map(values.map(value => [JSON.stringify(value.email), value])).values()];
            setLocalData(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Unable to store new value for ${key} in localStorage. `, error);
        }
    };

    const clearLocalStorage = () => { localStorage.clear(); setLocalData([]) }

    return [storedLocalData, setValueToLocalStorage, clearLocalStorage];
}


export default useLocalStorage;