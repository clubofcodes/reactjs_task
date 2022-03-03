import { memo } from "react";

export default memo(function WithoutCallbackMemoComp(props) {
    console.log('Without useCallback, Memo Component renders first time and then on func refrence change which means prop changes:', props.newNum);

    //randomize number logic and returns new number to props function parameter.
    const randomizeNumber = () => props.randomNumFunc(Math.random());

    return (
        <div>
            {/* new randomize number from ParentComponent(MultiHookComponent) props */}
            <p className="mb-0">MemoComp Without useCallback In MainComp</p>
            <p className="mb-1">Random Number: {props.newNum}</p>
            {/* Trigger randomizeNumber function and passes new random num to props func parameter. */}
            <button className="mb-1" onClick={randomizeNumber}> Click to randomize number</button>
            <div className="div-flex mb-3">
                <strong className="rectanglebg text-danger text-wrap">Note: Random Number value is not changed still this component re-renders(see logs), because without useCallback normal function creates new refrences in memory each time and thus props changes.</strong>
            </div>
        </div>
    )
});
