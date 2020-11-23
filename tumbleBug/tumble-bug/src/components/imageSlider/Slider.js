import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components';
import Image from './sections/Image';
import SideText from './sections/SideText';
const SliderTemplate = styled.div`
    display: flex;
    justify-content : center;
    padding : 50px 50px;
`;

const ImageTemplate = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 680px;
    height: 383px;
    overflow: hidden;
`;

const SideTextTemplate = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color : pink;
    width: 320px;
`;


function Slider({object}) {

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
    return(

        <SliderTemplate>
            <ImageTemplate>
                {
                    object.map((obj,idx)=> (
                        <Image key={`Image-${idx}`} chIdx={chIdx} obj={obj}>
                        </Image>
                    ))
                }
            </ImageTemplate>

            <SideTextTemplate>
            {
                    object.map((obj,idx)=>(
                        <SideText
                        chIdx={chIdx}
                        obj={obj}
                        key={`SideText-${idx}`}
                        onClickLeftButton={onClickLeftButton}
                        onClickRightButton={onClickRightButton}
                        >
                        </SideText>
                    ))
                }
            </SideTextTemplate>
        </SliderTemplate>
    )
}

export default Slider;