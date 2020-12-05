import './MemberDetail.scss';

import { useState, useEffect } from 'react';

import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';

import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';
import memberAPI from '../../lib/api/memberAPI';

function MemberDetail({match}) {
    const [memberState,setMemberState] = useState ({
        status: 'idle',
        member: null,
    });

    useEffect(() => {
        (async () => {
            try {
                setMemberState({status: 'pending', member: null});
                const data = await memberAPI.getMember(match.params.id);
                console.log(data);
                setMemberState({status: 'resolved', member: data});

            }catch(e) {
                setMemberState({status: 'rejected', member: null});
            }
        })();
    }, [match.params.id]);

    const onChangeInputs = async (evt) => {
        const { name, value } = evt.target;
        try {
            await memberAPI.updateMember(match.params.id, {
                ...memberState.member,
                [name] : value,
            });
            setMemberState({
                member : {
                    ...memberState.member,
                    [name] : value,
                }
            });
        } catch(e) {
            console.error(e);
        }
    };
    
    const memberElement = () => (
        <div className="member-detail">
            <div className="member-detail__button-area">
                <Button text="Add icon"></Button>
                <Button text="Add cover"></Button>
            </div>
            <input className="member-detail__content name" name="name" value={memberState.member.name} onChange={ onChangeInputs }/>
            <hr style={{borderTop: "solid 1px #eee", marginBottom: "24px"}}/>
            <div className="member-detail__content">
                <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                <input className="content-input" name="instagram" value={memberState.member.instagram} onChange={ onChangeInputs }/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                <input className="content-input" name="introduction" value={memberState.member.introduction} onChange={ onChangeInputs }/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><RadarChartOutlined />&nbsp; mbti</div>
                <input className="content-input" name="mbti" value={memberState.member.mbti} onChange={ onChangeInputs }/>
            </div>
            <div className="member-detail__content">
                { memberState.member.profileUrl !== '' ? <img className="content-image" src={memberState.member.profileUrl} alt={'profile url'} /> : '' }
            </div>
        </div>
    );

    switch (memberState.status) {
        case 'pending':
            return <Loading />;
        case 'resolved':
            return memberElement();
        case 'rejected':
            return <h1>해당 멤버가 없습니다</h1>;
        case 'idle':
        default: 
            return <div></div>
    }
}

export default MemberDetail;