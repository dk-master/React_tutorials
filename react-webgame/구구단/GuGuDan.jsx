const React = require('react');
const {useState, useRef} = React;
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); // setState, state 각각 전용임 변하는 값들
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState(' ');
    const [result, setResult] = useState(' ');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult("정답: " + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue("");
            inputRef.current.focus();
        }else {
            setResult("땡");
            setValue("");
            inputRef.current.focus();
        }
    }
    console.log("랜더링");
    return (
    <React.Fragment>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>  
            <input ref={inputRef} type = "number" onChange = {onChangeInput} value = {value} />
            <button>입력!</button>
            </form>
        <div id ="result">{result}</div>
    </React.Fragment>
    )
}

module.exports = GuGuDan;