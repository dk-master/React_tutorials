import './MemberList.scss'
import Button from '../../button/Button'
import Card from '../../card/Card';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Loading from '../../loading/Loading';

function MemberList() {
    const [membersState, setMembersState] = useState({
        members:null,
        status: 'idle',
    })

     // Promise의 상태
    // pending: Promise가 생성된 이후~ 아직 끝나지 않은 경우
    // fullfilled: Promise가 끝난 경우
    // resolved: Promise가 끝났는데 성공한 경우
    // rejected: Promise가 끝났는데 실패한 경우
    useEffect(() => {
        (async () => {
            setMembersState({members: null, status:'pending'});
            try {
                const result = await axios.get('http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members');
                setTimeout(() => setMembersState({members:result.data.data, status: 'resolved'}), 800 );
            } catch(e) {
                setMembersState({members: null, status : 'rejected'});
            }
        })();
    }, []);

    switch (membersState.status) {
        case 'pending' :
            return <Loading />
        case 'rejected' :
            return <div>실패 page</div>

        case 'resolved' :
        return(
            <div className="member-list">
                <div className="member-list__title">파트원 소개</div>
                <div className="member-list__header member-list-header">
                    <div className="member-list-header__nav">Gallery View</div>
                    <div className="member-list-header__empty"></div>
                    <Button text="Properties" textColor="#777"></Button>
                    <Button text="Filter" textColor="#777"></Button>
                    <Button text="Sort" textColor="#777"></Button>
                    <Button text="Search" textColor="#777" icon="search"></Button>
                    <Button text="..." textColor="#777"></Button>
                </div>
            <hr />
            <div className="member-list-content-wrapper">
                {membersState.members.map(member =>(
                    <Card key={`member-${member.id}`} memberData={member}></Card>
                ))}
            </div>
            </div>
        );
        case 'idle' :
            default :
                    return <div>idle 입니다.</div>
    }
}

export default MemberList;