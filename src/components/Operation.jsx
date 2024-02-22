import React from "react";
import {update} from "../redux/calculatorActions";
import {connect} from "react-redux";

function Operation(props) {

    const handleClick = (e) => {
        const val = e.target.textContent !== "X" ? e.target.textContent : "*";
        props.update(val);
    };

    return (
        <button
            id={props.id}
            className="btn btn-operation"
            onClick={handleClick}
        >
            {props.operation}
        </button>
    );
}

const mapDispatchToProps = (dispatch) => ({
    update: (content) => dispatch(update(content))
});


export default connect(null, mapDispatchToProps)(Operation);

