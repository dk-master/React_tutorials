import './App.css';
import React from "react";
import SearchInput from './component/SearchInput';
import SearchResult from './component/SearchResult';

import axios from 'axios';

const client = axios.create( {
  baseURL : "https://api.github.com/users/"
})
function App() {
  const getUserAPI = async (username) => {
    const data = await client.get(username);
    console.log("data", data)
  }
  React.useEffect(() => {
    getUserAPI("dk-master")
  },[])
  return (
    <>
    <SearchInput/>
    <SearchResult/>
    </> 
  )
}

export default App;


