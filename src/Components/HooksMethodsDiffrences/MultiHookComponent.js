import { useCallback, useState } from "react";
import CallbackHook from "./CallbackHook";
import MemoComponent from "./MemoComponent";
import WithoutCallbackMemoComp from "./WithoutCallbackMemoComp";
import './HooksMethods.css';

export default function MultiHookComponent() {

  const [mainValue, setMainValue] = useState(0);
  const [callBackValue, setCallBackValue] = useState(0);

  //This function memorize's function refrence until function params value is not changed.
  //i.e., if same function with same value is passed inside callback then,
  //props will not change & memo component will not re-render as it is called below in return.
  const memorizeRandomNum = useCallback((number) => setCallBackValue(number), []);

  //Without using callback if this below function is passed in props than there will be diffrent refrence
  //each time in memory and props changes, so even memo component will re-render.
  const randomNum = (number) => setCallBackValue(number);

  console.log('-----------Main Component Rendered-----------');
  return (
    <div>
      <hr />
      <p>={'>'} Multiple Hooks Diffrences</p>
      <p className="mb-1">MainComp Increment Value: {mainValue}</p>
      {/* Increments the mainValue state, first memoComp is re-render as randomNum func refrence changes
      each time, which is passed as props in MemoComponent.
      But in second memoComp I passed func using callback hook then only CallbackHook comp is re-rendered. */}
      <button className="mb-1" onClick={() => setMainValue(mainValue + 1)}>Click to increment</button>
      <div className="div-flex mb-3">
        <strong className="rectanglebg text-danger text-wrap">Note: Only Main component value is updated in state. So memo child component will not re-render as props doesn't change. Initialy memo memorize's the value only not function.</strong>
      </div>

      {/* Will re-render whenever this(MultiHookComponent) is rendered as eachtime func refrence is new.*/}
      <WithoutCallbackMemoComp randomNumFunc={randomNum} newNum={callBackValue} /> {/*Will not be re-render until callBackValue(props) is not changed*/}

      {/* Will not re-render whenever this(MultiHookComponent) is rendered as eachtime func refrence will be same with help of useCallback().*/}
      <MemoComponent randomNumFunc={memorizeRandomNum} newNum={callBackValue} /> {/* Will not be re-render until callBackValue(props) is not changed */}

      {/* Without memo CallbackHook will re-render whenever this main component will re-render. */}
      {/* <CallbackHook randomNumFunc={memorizeRandomNum} newNum={callBackValue} /> Displays Random Num */}
    </div>
  )
}
