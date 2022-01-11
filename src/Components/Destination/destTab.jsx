import '../../assets/css/destination/destStyle.css';
function DestTab(props) {
    return (
        <div className="tabLinks">
            <button name="moon" onClick={props.btnClick}>Moon</button>
            <button name="mars" onClick={props.btnClick}>Mars</button>
            <button name="europa" onClick={props.btnClick}>Europa</button>
            <button name="titan" onClick={props.btnClick}>Titan</button>
        </div>
    )
}

export default DestTab;