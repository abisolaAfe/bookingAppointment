
export default function ResetButton({ ResetCounts }) {
    return (
        <button className="ResetButton" onClick={Reset}>Reset</button>
    );
    function Reset() {
        ResetCounts();
    }

}

