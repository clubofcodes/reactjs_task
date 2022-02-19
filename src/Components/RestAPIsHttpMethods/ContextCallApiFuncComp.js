import React, { useContext } from 'react';
import { UserContext } from './AjaxFetchClassComp';
import '../../Assets/Css/custom.css';

export default () => <div><button className='btn btn-outline-primary btn-lg' onClick={useContext(UserContext).callApi}>Call Api</button></div>
