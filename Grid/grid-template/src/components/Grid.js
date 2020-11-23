import React from 'react';
import style ,{css} from 'styled-components';

const Part = style.div`
    border  : 1px dotted #bcbcbc;
    align-items : center;
    background-image: url(${props=>props.partInfo.img});
    background-size: cover;
    padding: 7vh 0;
    background-color: rgba(0,0,0,0.2);
    
`

const Title  = style.div`
    font-size : 3vw
    font-weight : 700;
    text-align : center;
    color : white;
`;

const SubTitle = style.div`
    font-size  : 1vw;
    font-weight : regular;
    text-align : center;
    color : white;
`;

function Grid({partInfo}) {
    console.log(partInfo.img)
return ( 
    <>
        <Part partInfo={partInfo}>
            <Title>{partInfo.title}</Title>
            <SubTitle>{partInfo.subTitle}</SubTitle>
        </Part>
    </>
)

}

export default Grid;