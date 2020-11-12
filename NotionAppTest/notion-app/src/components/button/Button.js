import './Button.scss';

function Button({text,textColor="#444",onClickFunc}){
    return (
        <div className="Button" style={{color:textColor}}
        onClick={onClickFunc}>{text}</div>
    )
}
//여기서는 props로 각 버튼의 onClickFunc (버튼이 눌릴때 어떤 동작을 하는지)를 넘겨준다.

export default Button;