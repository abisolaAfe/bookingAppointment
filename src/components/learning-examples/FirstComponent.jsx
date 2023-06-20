
export default function FirstComponenet() {
    return (
        <>
            <div className="FirstComponent">First Component</div>
            <FourthComponenet />
        </>
    )
}

function FourthComponenet() {
    return (
        <div className="FourthComponent">Fourth Component</div>
    )
}