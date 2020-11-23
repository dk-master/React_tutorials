import React from 'react'
import styled, {css} from 'styled-components';

const Img = styled.img`
    width:100%;
    cursor: pointer;
    ${props =>
        css`
            transform: translate(-${(props.chIdx)*100}%,0px);
            transition: 0.5s;
        `
    }
`;
function Image({obj, chIdx}) {
        return (
            <>
                <Img chIdx={chIdx} src={obj.img}></Img>
            </>
        );
}

export default Image;