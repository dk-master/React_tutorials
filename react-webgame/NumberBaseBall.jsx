import React, {useState} from 'react';

function getNumbers() { // 숫자 4개를 겹치지않게 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];

    for(let i = 0; i<4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9)))
        array.push(chosen)
    }
    return array;
}
const onsubmitForm = (e) => {

    e.preventDefault;
    if (value === answer.join('')) {
        setResult("홈런!");
        setTries((prevTries) => {
        return [...prevTries, {try : value, result: "홈런 !"}]
        });
        alert(" 게임을 다시시작합니다.");
        
        setValue('');
        setAnswer(getNumbers());
        setTries([]);

    } else {  //답 틀렸으면
        const answerArray = value.split('').map( (v) => parseInt(v));
        const strike = 0;
        const ball = 0;
        if (tries.length >= 9) {
            setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다.`);
            alert("게임을 다시 시작합니다.");
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            for (let i = 0; i<4; i++) {
                if (answerArray[i] === answer[i]) {
                    strike += 1;
                } else if(answer.includes(answerArray[i])){ // 배열안에 값이 있는지 없는지 판단하는것 .
                    ball += 1;
                }
            }
        }
    } 



}

const onChangeInput = () => {
    setValue(e.target.value);




}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value,setValue] = useState('');
    const [answer, setAnswer] = userState(getNumbers());
    const [tries, setTries] = useState([]);
    return (<>
        <h1>{result}</h1>
        <form onSubmit = {onSubmitForm}>
            <input maxLength ={4} value={value} onChange={onChange}></input>
        </form>
        <div>시도 : {tries.length} </div>
        <ul>
            {tries.map((v,i)=> {
                return (
                    <Try key={`${i+1}차 시도 :`} tryInfo={v} />
                )
            })}
        </ul>
    </>
    )
}


// class NumberBaseball extends Component {
//     state = {
//         result: '',
//         value: '',
//         answer: getNumbers(), // 숫자 4개를 뽑아야한다.
//         tries: [] //push 쓰면 안댐
//     };

//     onsubmitForm = (e) => {
//         const {value, tries, answer} = this.state;
//         e.preventDefault;


//     }

//     onChangeInput = () => {



//     }

//     render() {
//         return (

//             <>
//                 <h1>{this.state.result}</h1>
//                 <form onSubmit={this.onSubmitForm}>
//                     <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
//                 </form>
//                 <div>시도: {this.state.tries.length}</div>
//                 <ul>
//                     {['like','like','like','like','like'].map(() => {
//                         return (<li>like</li>);
//                     })}
//                     <li></li>

//                 </ul>
//                 </>



//         );
//     }

// }
export default NumberBaseball;

