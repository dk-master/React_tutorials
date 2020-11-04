import './App.css';
import React, {useState,useEffect} from "react";
import SearchInput from './component/SearchInput';
import SearchResult from './component/SearchResult';
import getUserAPI from './lib/api';

// 부모컴퍼넌트에서 자식컴퍼넌트로 props전달 예시

function App() {
  const [user,setUser] = useState(null);
  const getUser = async (username) => { // 커스텀메소드
    const data = await getUserAPI(username);
    setUser(data); //  유저 이름을 넣는데 input에서 받은걸 넣고싶어서 getUser메소드를 props로 input에 넘겨주고
    
  }
  return (

    <>
    <SearchInput onSubmit={getUser}/>
    <SearchResult user={user}/>
    </> 
  )
}

export default App;


