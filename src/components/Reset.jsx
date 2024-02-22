import React from "react";
import {reset} from "../redux/calculatorActions";
import {connect} from "react-redux";

function Reset(props) {
    return (
        <button id="clear" className="btn btn-clear"
                onClick={props.reset}>
            AC
        </button>
    );
}

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(reset())
})

export default connect(null, mapDispatchToProps)(Reset);
