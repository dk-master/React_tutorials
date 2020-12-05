import './MemberList.scss';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading'
import axios from 'axios';
import {useState,useEffect} from 'react';
import {getMembers} from '../../lib/api/memberAPI';
function MemberList({history,match}) {
    const [members, setMembers] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            const result = await getMembers();
            setMembers(result);
            setTimeout(() => setLoading(false), 800);
        })(); // 여기서 함수 바로 실행
    }, []); // 앱을 실행할때 한번만 하라고 []

    const removeCard = (evt) => {
        evt.stopPropagation();
        console.log("Remove CARD");
    }

    switch(loading) {
        case true : 
            return <Loading />


        default : 
            return (
                <div className="member-list">
                    <div className="member-list__title">파트원 소개</div>
                    <div className="member-list__header member-list-header">
                        <div className="member-list-header__nav">갤러리 보기</div>
                        <div className="member-list-header__empty"></div>
                        <Button text="속성" textColor="#777"></Button>
                        <Button text="필터" textColor="#777"></Button>
                        <Button text="정렬" textColor="#777"></Button>
                        <Button text="검색  " textColor="#777" icon="search"></Button>
                        <Button text="..." textColor="#777"></Button>
                    </div>
                <hr/>
                <div className="member-list-content-wrapper">
                    {members.map(member =>(
                        <Card key ={`member-${member.id}`} route={{history, match}} memberData = {member} onRemoveCard={ removeCard }/>
                    ))}
                </div>
                </div>
            );

    }
}

export default MemberList;