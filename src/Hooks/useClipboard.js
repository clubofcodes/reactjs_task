import { useState } from "react";
import copy from "copy-to-clipboard";

/**
 * 
 * @returns input & button value, 2 functions(copyToClipBoar & handleCopyText).
 */
export default function useClipboard() {

    //New State to handle input value and copy to clipboard.
    const [copyText, setCopyText] = useState('');
    //New State to handle copyButton value.
    const [copyBtnValue, setCopyBtnValue] = useState('Copy');

    //Stores value entered by user in state and reverts button value back to copy.
    const handleCopyText = (e) => {
        setCopyText(e.target.value);
        setCopyBtnValue('Copy');
    }

    //Actual method to copy to clipoard on Copy button click event.
    const copyToClipboard = async () => {
        //if empty then shows alert.
        if (!copyText) alert('Please enter something to copy!!');
        else {
            //Method - 1: Using custom 'copy-to-clipboard' package of npm.
            // copy(copyText); //copies value to clipboard.

            //Method - 2: Using copy execCommand method.
            // var copyTextInputValue = document.getElementById('copyTextInput')
            // copyTextInputValue.select();
            // document.execCommand('copy');

            // Method - 3: Using navigator object and Clipboard Api.
            // navigator.clipboard.writeText(copyText);
            ('clipboard' in navigator) ? await navigator.clipboard.writeText(copyText) : document.execCommand('copy', true, copyText);

            setCopyBtnValue('Copied'); //Change copy button value to copied.
            setCopyText(''); //Clear the input after successfully copied to clipboard.
        }
    }

    return { copyText, copyBtnValue, handleCopyText, copyToClipboard };
}
