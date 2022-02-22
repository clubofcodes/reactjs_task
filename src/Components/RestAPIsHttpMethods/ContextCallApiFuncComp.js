import React, { useContext } from 'react';
import { UserContext } from './AjaxFetchClassComp';
import '../../Assets/Css/custom.css';

/**
 * 
 * @returns button html code and it's click event calls callback function of parent component.
 */
export const CallApiBtn = () => <div><button className='btn btn-outline-primary btn-lg' onClick={useContext(UserContext).callApi}>Call Api</button></div>
