import { useCallback, useMemo, useState } from "react";
import MemoComponent from "./MemoComponent";
import WithoutCallbackMemoComp from "./WithoutCallbackMemoComp";
import './HooksMethods.css';

export default function MultiHookComponent() {
  console.log('-----------Main Component Rendered-----------');

  const [mainValue, setMainValue] = useState(0);
  const [callBackValue, setCallBackValue] = useState(0);
  const [numArr, setNumArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  //This function memorize's function refrence until function params value is not changed.
  //i.e., if same function with same value is passed inside callback then,
  //props will not change & memo component will not re-render as it is called below in return.
  const memorizeRandomNumCallback = useCallback((number) => setCallBackValue(number), []);

  //Without using callback if this below function is passed in props than there will be diffrent refrence
  //each time in memory and props changes, so even memo component will re-render.
  const randomNum = (number) => setCallBackValue(number);

  const memorizeVal = useMemo(() => getLargestNum(), [numArr]);

  function getLargestNum() {
    console.log('Inside getLargestNum function, it will be called only when array changes till then useMemo memorize the computed value.');
    return Math.max(...numArr);
  }

  function changeNumArr() {
    console.log('Array changed');
    setNumArr([10, 35, 20, 9]);
  }

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
      <MemoComponent randomNumFunc={memorizeRandomNumCallback} newNum={callBackValue} /> {/* Will not be re-render until callBackValue(props) is not changed */}

      <p className="mb-0">GetLargestNumber from array {'&'} memorize using useMemo In MainComp</p>
      <p className="mb-1">[1-10]Array's Largest Number: {memorizeVal}</p>
      <button className="mb-1" onClick={changeNumArr}>Change Array[10,35,20,9]</button>
      <div className="div-flex mb-3">
        <strong className="rectanglebg text-danger text-wrap">Note: Particular getLargestNum func will not re-compute whenever component re-renders when we click on increment button. Because I applied useMemo() logic to memorize the computed value by that function(i.e.,15). That function will only recompute(see logs) the memoized value when one of the deps(array) has changed. Click change array and new memorized value will be 35.</strong>
      </div>
    </div>
  )
}
