import './App.css';
import Display from "./components/Display";
import Operation from "./components/Operation";
import Operand from "./components/Operand";
import Reset from "./components/Reset";
import Equals from "./components/Equals";
import {connect} from "react-redux";
import {equal, update} from "./redux/calculatorActions";
import {useEffect} from "react";

function App(props) {
    const operandArray = [
        {id: "seven", value: "7"},
        {id: "eigth", value: "8"},
        {id: "nine", value: "9"},
        {id: "four", value: "4"},
        {id: "five", value: "5"},
        {id: "six", value: "6"},
        {id: "three", value: "3"},
        {id: "two", value: "2"},
        {id: "one", value: "1"},
        {id: "zero", value: "0"},
        {id: "decimal", value: "."},
    ];

    const operationArray = [
        {id: "add", value: "+"},
        {id: "subtract", value: "-"},
        {id: "multiply", value: "X"},
        {id: "divide", value: "/"},
    ];

    const handleKeyPress = (e) => {
        const val = e.key;
        const reqKeys = '123456789.+-/*';
        if(reqKeys.includes(val)){
            props.update(val);
        }
        else if(val === '=' || val === 'Enter'){
            props.equal();
        }
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener('keypress', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [props.expression]);


    return (
            <div className="calculator">
                <Display/>
                <div className="btns">
                    {operationArray.map((item) => {
                        return (
                            <Operation
                                key={item.id}
                                id={item.id}
                                operation={item.value}
                            />
                        );
                    })}
                    {operandArray.map((item) => {
                        return (
                            <Operand
                                key={item.id}
                                id={item.id}
                                num={item.value}
                            />
                        );
                    })}
                    <Reset />
                    <Equals />
                </div>
            </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    equal: () => dispatch(equal()),
    update: (content) => dispatch(update(content))
});

export default connect(null, mapDispatchToProps)(App);
