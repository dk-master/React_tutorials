import './MainHeader.scss'
import Button from '../button/Button'
function MainHeader({match,history,location}) {
    console.log(match,history,location)
    return (

    <header className = "main-header">
        <img className="main-header__icon" alt="icon" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/079e7553-e9b3-4bd7-8063-f9c162a224e0/mdi_dehaze.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201109T135620Z&X-Amz-Expires=86400&X-Amz-Signature=cea4ccebba445a0d38b7d911fd68a8155786c2324a42138dbe5136f153d2af7d&X-Amz-SignedHeaders=host"/>
        <nav className="main-header__nav">
            <Button text="[ON SOPT] Web Part" onClickFunc={ () => history.push('/')}/>
            <span>/</span>
            <Button text="파트원소개" onClickFunc={ () =>history.push('/members')}/> 
        </nav>
        <div className="empty"></div>
        <div className="main-header__nav"></div>
            <Button text="Share"/>
            <Button text="Favorite"/>
            <Button text="..."/>
    </header>
    );
}

export default MainHeader;