import React from 'react';

function Hello({name,style,isSpecial}) {
    return <div style = {style} >
        {isSpecial ? <b>*</b> : null}안녕하세요 {name}
        </div>
}

Hello.defaultProps = {
    name : "이름없음",
}
export default Hello;