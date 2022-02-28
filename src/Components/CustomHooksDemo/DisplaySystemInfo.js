import useSystemInfo from "../../Hooks/useSystemInfo";

export default function DisplaySystemInfo() {
    //assigning array return by custom hook to new array.
    //i.e., [newArrVal1, newArrVal2,...] = [fetchedArrVal1,fetchedArrVal2,...]
    const [height, width, innerHeight, innerWidth, outerHeight, outerWidth, isWindow] = useSystemInfo();

    return (
        <div>
            <p className='topic-heading'>={'>'} Displaying Window HeightWidth and Device using screen and navigator object.</p>
            {/* On window resize, height width will be displayed by custom hook. */}
            <div className='div-flex'><p className='rectanglebg'>Height: {height} {'&'} Width: {width}</p></div>
            <div className='div-flex'><p className='rectanglebg'>Inner Height: {innerHeight} {'&'} Inner Width: {innerWidth}</p></div>
            <div className='div-flex'><p className='rectanglebg'>Outer Height: {outerHeight} {'&'} Outer Width: {outerWidth}</p></div>
            <div className='div-flex'><p className='rectanglebg'>Flag Device: {isWindow ? 'Desktop Window' : 'Mobile Phone'}</p></div>
        </div>
    )
}
