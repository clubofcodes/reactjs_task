import React, { useContext } from 'react';
import { UserContext } from './AjaxFetchClassComp';

export default function LoadApi() {

    const api = useContext(UserContext);
    return (
        <div>
            <button onClick={() => api.callApi()}>Call Api</button>
        </div>
    )
}
