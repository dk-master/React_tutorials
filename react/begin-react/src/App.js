import React, {useRef, useState}from 'react';
import Hello from './hello';
import Wrapper from './wrapper';
import Counter from './counter';
import InputSample from './inputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';
function App() {


  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const { username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs( {
      ...inputs,
      [name] : value
    });
  };

  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
];

  const nextId = useRef(4);
  const onCreate = () => {

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }
  // const name  = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color : 'aqua',
  //   fontSize : 24,
  //   padding : '1rem'
  // }

  return (
    // < >
    // {/* <Hello style = {style} name = {name}/>
    // <div style = {style}>{name}</div>
    // <div className = "gray-box"></div> */}
    

    // <Wrapper>
    //     <Hello name = {name} style = {style}color = "red" isSpecial = {true}/>
    //     <Hello color = "pink"/>
        
        
    //     </Wrapper>

    // </>
    <>
    <CreateUser username = {username}
                email = {email}
                onChange = {onChange}
                onCreate = {onCreate}/>
    <UserList users={users}/>
    </>
  );
}

export default App;
