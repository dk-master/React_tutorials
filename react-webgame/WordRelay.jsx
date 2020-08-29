// const React = require('react');
// const { useState,useRef } = React;

// const WordRelay = () =>  {
//     const [word, setWord] = useState("제로초");
//     const [value, setValue] = useState('');
//     const [result,setResult] = useState('');
//     const inputRef = useRef(null); // 기본값은 null
    
//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         if(word[word.length-1] === value[0]){
//             setResult("딩동댕");
//             setWord(value);
//             value('');
//             inputRef.current.focus();
//         }
//         else {
//             setResult("땡")
//             setValue("")
//             inputRef.current.focus();
//         }
//     }

//     const onChangeInput = (e) => {
//         this.setState({value: e.target.value})

//     };
//     input;
  
//         return (<>

//             <div>{word}</div>
//             <form onSubmit={onSubmitForm}>
//                 <label htmlFor="wordInput">글자를 입력하세요. </label> 
//                 <input id = "wordInput" className="wordInput" ref={inputRef} value ={value} onChange ={onChangeInput} />
//                 <button >클릭!</button>           
//             </form>
//             <div>{result}</div>
//         </>
//         );
    
// }

// module.exports = WordRelay;