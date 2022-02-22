import useViewPort from "../../Hooks/useViewPort"

export default function DisplayViewportHW() {
    //assigning array return by custom hook to new array.
    //i.e., [newArrVal1, newArrVal2,...] = [fetchedArrVal1,fetchedArrVal2,...]
    const [height, width, innerHeight, innerWidth, outerHeight, outerWidth] = useViewPort();

    return (
        <div>
            <p className='topic-heading'>={'>'} Displaying Window HeightWidth using custom Hook in Function Component.</p>
            {/* On window resize, height width will be displayed by custom hook. */}
            <h2 className='innertag-flex'><p className='rectanglebg'>Height: {height} {'&'} Width: {width}</p></h2>
            <h2 className='innertag-flex'><p className='rectanglebg'>Inner Height: {innerHeight} {'&'} Inner Width: {innerWidth}</p></h2>
            <h2 className='innertag-flex'><p className='rectanglebg'>Outer Height: {outerHeight} {'&'} Outer Width: {outerWidth}</p></h2>
        </div>
    )
}
