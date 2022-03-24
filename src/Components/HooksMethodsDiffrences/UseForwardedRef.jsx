import { useRef } from "react";
import { UseRef } from "./UseRef";

const UseForwardedRef = () => {
    const inputRef = useRef(null);
    const dataRef = useRef(null);
    const showEmail = useRef(null);

    const handleSubmit = () => {
        var email = inputRef.current.value;
        email ? dataRef.current.className = "div-flex" : inputRef.current.focus();
        showEmail.current.style.color = 'tomato';
        showEmail.current.textContent = "Email: " + email;
    }

    return (
        <div>
            <p className='topic-heading'>={'>'} Form input refrence using forwardRef Method.</p>
            <UseRef showBtn={false} ref={inputRef} />
            <div className="d-none" ref={dataRef}>
                <p className="rectanglebg text-wrap w-25" ref={showEmail}>Email: Not Found</p>
            </div>
            <button type="submit" className="btn btn-primary round shadow-none" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UseForwardedRef;