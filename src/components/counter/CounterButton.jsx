import { PropTypes } from 'prop-types'
//import Count from './CounterApp'
export default function CounterButton({ by, IncreMethodInParent, DecreMethodInParent }) {
    return (
          
        <div className="CounterButton" >

            <div>
                <button className="counterButton" onClick={() =>IncreMethodInParent(by)}>+{by}</button>
                <button className="counterButton" onClick={() => DecreMethodInParent(by)}>-{by}</button>
            </div>
        </div >
    );  
}
CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultTypes = {
    by: 1
} 