import React,{useState,useRef} from "react";
import '../App.scss';

function SearchInput({onsubmit}) {
    const [input,setInput] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(input);
        setInput("");
        
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="search-input"
            placeholder="Github 프로필을 검색해보세요"
            value={input}
            onChange={onChange}
            ref={inputRef}
        />
        </form>
    );
    }

    export default SearchInput;