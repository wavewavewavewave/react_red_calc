import React from "react";
import {update} from "../redux/calculatorActions";
import {connect} from "react-redux";

function Operand(props) {
    const handleClick = (e) => {
        const val = e.target.textContent;
        props.update(val);
    };

    return (
        <button id={props.id} className="btn btn-operand" onClick={handleClick}>
            {props.num}
        </button>
    );
}
const mapDispatchToProps = (dispatch) => ({
    update: (content) => dispatch(update(content))
});

export default connect(null, mapDispatchToProps)(Operand);