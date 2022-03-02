import { memo } from "react";

//using memo method, will prevent from re-rendering if incoming props are not changing.
//Method-1 : using Regular function
// export default memo(function MemoComponent() {
//   return (
//     <div>{console.log('Memo Component')}</div>
//   )
// });
//Method-2 : using Arrow function
export default memo((props) => <div>{console.log('Memo Component only renders on Increment change:', props.newNum)}</div>);