import React , {useState}from 'react';

function SearchInput ({onSubmit}) {
    const [input, setInput] = useState("");
    
    const handleChange = (e) => { // 커스텀 메소드
        setInput(e.target.value) // 인풋에서 입력받은값을 넣어줄때 입력할때마다 하나씩 계속 콘솔찍힘 문자 결국엔 dk-master
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //다른 링크로 넘어가는거 방지
        onSubmit(input); // app.js에서 받은 onSubmit에 input에서 받은 dk-master를 user로 넣어준다
        setInput("");
    }
    return <div>
        <form onSubmit={handleSubmit}> 
        <input type="text " placeholder="github 프로필 등록" value ={input} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchInput;


// 하위컴포넌트에 있는값을 상위컴포넌트에 전달하기위해 함수를 전달한다.