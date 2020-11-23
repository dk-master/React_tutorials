import React from 'react';
import styled from 'styled-components';
const NavBarTemplate = styled.div`
    display :flex;
    justify-content: center;
    padding : 50px 50px;
`;
const NavBarLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right : 5px;
    width :33%;
    
`;
const Menu = styled.div`
    font-size: 13px;
    margin: 10px;
    margin-right: 0px;
    cursor: pointer;
`;
const Text1= styled.div`
    margin-left : 5px;
    margin-right : 10px;
`;
const Text2 = styled.div`

`;
const Logo = styled.img`
    display : flex;
    justify-content: center;
    width :100px;
`;
const NavBarRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width :33%;

`;

const ImgSearch = styled.img`
    width: 20px;
    height: 20px;
    margin-right : 10px;
`;
const ImgUser = styled.img`
    width: 28px;
    height: 28px;
`;
const Text3 = styled.div`

`;

function Navbar() {
    return (
        <>
        <NavBarTemplate>
            <NavBarLeft>
                <Menu>
                O
                </Menu>
                <Text1>프로젝트 둘러보기</Text1>
                <Text2>프로젝트 올리기</Text2>
            </NavBarLeft>
            <Logo src="/images/logo.png"/>

            <NavBarRight>
                <ImgSearch src="https://tumblbug.com/wpa/e5aa161342e919b420a40fc6e34cce08.png"></ImgSearch>
                <Text3>로그인 / 회원가입</Text3>
                <ImgUser src="https://tumblbug-assets.imgix.net/assets/user-account.png?s=08b1f9ecf24209994ac9b81900936c0e"></ImgUser>
            </NavBarRight>
        </NavBarTemplate>

        </>
        
    )
}

export default Navbar;