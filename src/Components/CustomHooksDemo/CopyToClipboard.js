import useClipboard from "../../Hooks/useClipboard";

export default function CopyToClipboard() {
    //Clipboard custom hook value initialization/declaration.
    const { copyText, copyBtnValue, handleCopyText, copyToClipboard } = useClipboard();

    return (
        <div>
            <br />
            <p className='topic-heading'>={'>'} Copy to clipboard</p>
            <div className="innertag-flex">
                <input type="text" name="copyTextInput" id="copyTextInput" value={copyText} placeholder="Enter anything to copy..." onChange={handleCopyText} />
                <button className='btn btn-outline-success btn-lg' onClick={copyToClipboard}>{copyBtnValue}</button>
            </div>

        </div>
    )
}
