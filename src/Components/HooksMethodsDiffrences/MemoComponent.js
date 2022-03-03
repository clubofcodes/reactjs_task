import { memo } from "react";

//using memo functionality, will prevent from re-rendering if incoming props are not changing.
// Method-1 : using Regular function
export default memo(function MemoComponent(props) {

    console.log('With useCallback, Memo Component renders first time and then only on function params value changes:', props.newNum);

    //randomize number logic and returns new number to props function parameter.
    const randomizeNumber = () => props.randomNumFunc(Math.random());
    
    return (
        <div>
            {/* new randomize number from ParentComponent(MultiHookComponent) props */}
            <p className="mb-0">MemoComp With useCallback In MainComp</p>
            <p className="mb-1">Random Number: {props.newNum}</p>
            {/* Trigger randomizeNumber function and passes new random num to props func parameter. */}
            <button className="mb-1" onClick={randomizeNumber}> Click to randomize number</button>
            <div className="div-flex mb-3">
                <strong className="rectanglebg text-danger text-wrap">Note: This component will not re-render whenever main component renders, because useCallback memorize's the function refrences if params value is same. Click to randomize number {'&'} see log, which changes params value with random number.</strong>
            </div>
            {console.log('-----------End of Main Component-----------')}
        </div>
    )
});