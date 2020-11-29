import React,{useState} from "react";
import "./App.scss";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { getUserAPI } from "./lib/api";


function App() {

  const [userState,setUserState] = useState({
    status: "idle",
    user: null,
  });

  const getUser = async (username) => {
    setUserState({...userState, status : "pending"});

    try {
      const data = await getUserAPI(username);
      setUserState({stauts : "resolved", user : data});
    }catch(error) {
      setUserState({status: "rejected", user: null});
      console.log(error);
    }
  }


  return (
    <div className="search-wrapper">
      <SearchInput onSubmit={getUser} />
      <SearchResult userState={userState} />
    </div>
  );
}

export default App;
