import React from "react";
import "../App.scss";
import UserCard from "./search/UserCard";
import Loading from "./search/Loading";
import NoResult from "./search/NoResult";

function SearchResult({userState}) {
    const {stauts, user} = userState ; // userState에 들어있는 녀석들 구조분해할당해준것
    switch (status) {
        case "pending":
            console.log("pending");
            return <Loading />;
    
        case "resolved":
            console.log("resolved");
            return <UserCard user={user} />;
    
        case "rejected":
            console.log("rejected");
            return <NoResult />;
    
        case "idle":
        default:
            return <div></div>;
        }
    }

    export default SearchResult;