export default function CallbackHook(props) {

    console.log('Callback Hook');

    //randomize number logic and returns new number to props function parameter.
    const randomizeNumber = () => props.randomNumFunc(Math.random());
    
    return (
        <div>
            {/* new randomize number from ParentComponent(MultiHookComponent) props */}
            <p>{props.newNum}</p>
            {/* Trigger randomizeNumber function and passes new random num to props func parameter. */}
            <button className="mb-3" onClick={randomizeNumber}> Click to randomize number</button>
        </div>
    )
}
