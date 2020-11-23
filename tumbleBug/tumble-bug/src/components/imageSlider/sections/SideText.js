import React from 'react';
import styled, {css} from 'styled-components';

const SideWrap = styled.div`
    width: 100%;
    height: auto;
    background-color : #222222;
    display : flex;
    flex-direction : column;
    justify-content:center;
    ${props =>
            props.chIdx == 1? css`
            transition :  0.5s ease-in-out;
            background-color: #378eb5;` 
            :
                (props.chIdx == 2? css`
                transition : all 0.5s ease-in-out;
                background-color: #d77847;`
                :
                    (props.chIdx == 3? css`
                    transition : all 0.5s ease-in-out;
                    background-color: #f4adac;`
                    :
                        (props.chIdx == 4? css`
                        transition : all 0.5s ease-in-out;
                        background-color: #2fa789;`
                        : css`background-color: #222222;`)))
    };
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 40px;
    margin-right: 20px;
    width: 260px;
`;
const MainText = styled.div`
    font-size: 30px;
    font-weight: bolder;
`;
const MainTxt1 = styled.div`
      margin-bottom:10px;
`;
const MainTxt2 = styled.div`
     margin-bottom:10px;
`;
const SubText = styled.div`
     margin-top: 20px;
    font-size: 13px;
`;
const ButtonAndPage = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonBox = styled.div`
    display : flex;
    color: white;
    margin-top:10px;
    margin-left: 40px;
`;
const ButtonLeft = styled.div`
    border: white solid 1px;
    background-color: rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
    width:13px;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonRight = styled.div`
    border: white solid 1px;
    background-color: rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    width:13px;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PageCnt = styled.div`
    color: white;
    background-color: rgba(0, 0, 0, 0.20);
    font-size: 7px;
    margin-top:16px;
    margin-left: 10px;
    border: 1px;
    border-radius: 40%;
    padding: 5px 8px;
`;

function SideText({chIdx, obj, onClickLeftButton, onClickRightButton}) {

    return (
        chIdx == obj.idx?
        <>
            <SideWrap chIdx={chIdx}>
                <TextBox>
                        <MainText>
                            <MainTxt1>{obj.mainTxt1}</MainTxt1>
                            <MainTxt2>{obj.mainTxt2}</MainTxt2>
                        </MainText>
                        <SubText>{obj.subTxt}</SubText>
                </TextBox>
                <ButtonAndPage>
                    <ButtonBox>
                        <ButtonLeft
                        onClick={onClickLeftButton}>
                            1
                        </ButtonLeft>
                        <ButtonRight
                        onClick={onClickRightButton}>
                            1
                        </ButtonRight>
                    </ButtonBox>
                    <PageCnt>{obj.idx+1}&nbsp;/&nbsp;5</PageCnt>
                </ButtonAndPage>
            </SideWrap>
        </>
        :null
    )
    
}

export default SideText