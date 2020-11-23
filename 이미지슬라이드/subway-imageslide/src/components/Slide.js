import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components';
import Image from '../section/Image';

const ImageContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
    height: 383px;
    overflow: hidden;
    position : relative;
`;

const ButtonLeft = styled.div`
    border: white solid 1px;
    position : absolute;
    background-color: rgba(0, 0, 0, 0.10);
    left : 30px;
    top : 150px;
    cursor : pointer;
`;
const ButtonRight = styled.div`
    border: white solid 1px;
    position : absolute;
    background-color: rgba(0, 0, 0, 0.10);
    right : 30px;
    top: 150px;
    cursor : pointer;
`;

function Slide ({object}) {

    const [chIdx,setChIdx] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const tmp = useRef(); // 변경가능한 값을 담고 있는 상자
    const onAutoIncrease = () => {
        if(chIdx != object.length-1) {
            setChIdx(chIdx+1);
        }else {
            setChIdx(0);
        }
    }
    // react에서 Interval 사용할때 아래와 같이 사용해아함
    useEffect(() => {
        tmp.current = onAutoIncrease;
    });

    useEffect(()=>{
        function tick() {
            tmp.current();
        } 
        let id = setInterval(tick, 2000);
        return () => clearInterval(id);
    },[])

    const onClickLeftButton = () => {
        if(chIdx != 0) {
            setChIdx(chIdx-1);
        }else {
            setChIdx(object.length-1);
        }
    }
    const onClickRightButton = () => {
        if(chIdx != object.length-1) {
            setChIdx(chIdx+1);
        }else {
            setChIdx(0);
        }
    }

    return (
        <>
        <ImageContainer>
        {
                    object.map((obj,idx)=> (
                        <Image key={`Image-${idx}`} chIdx={chIdx} obj={obj}>
                        </Image>
                    ))
                    }
        <ButtonLeft onclick = {onClickLeftButton}>1</ButtonLeft>
        <ButtonRight onclick = {onClickRightButton}>2</ButtonRight>
        </ImageContainer>
        
        </>

    )
}

export default Slide;