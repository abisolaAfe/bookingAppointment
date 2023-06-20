
import './Counter.css'
import { useState } from 'react'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton';


export default function Count({by}) {
    const [TotalCount, setCount] = useState(0);

    function IncreaseParentCounter(by) {
        setCount(TotalCount + by)
    }

    function DecreaseParentCounter(by) {
        setCount(TotalCount - by)
    }
   function ResetTriggerButton() {
       setCount(0)
    }
    

    return (
        <>
          <span className="Count" >{TotalCount}</span>
            < CounterButton by={1} IncreMethodInParent={IncreaseParentCounter}
                DecreMethodInParent={DecreaseParentCounter} /> 
            <CounterButton by={2} IncreMethodInParent={IncreaseParentCounter}
                                  DecreMethodInParent={DecreaseParentCounter} /> 
            <CounterButton by={3} IncreMethodInParent={IncreaseParentCounter}
                                  DecreMethodInParent={DecreaseParentCounter}            /> 
            <ResetButton ResetCounts={ResetTriggerButton} />
        </>
        );
}







    


