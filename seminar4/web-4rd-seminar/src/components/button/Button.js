import './Button.scss';

function Button({text, textColor='#444',onClickFunc}) {
    return (
        <div className="Button" style={{color:textColor}}
        onClick={onClickFunc}>{text}</div>
    )
}

export default Button;