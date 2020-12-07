import './Card.scss';
import { DeleteOutlined , FileImageOutlined} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import {deleteMember} from '../../lib/api/memberAPI';

function Card({memberData,history,onDeleteCard}) {

    const onClickRemove = async (evt) => {
        evt.stopPropagation();
        try {
            await deleteMember(memberData.id);
            onDeleteCard();
        } catch(e) {

        }
    }
    return (
        <div className="card" draggable onClick={ () => history.push(`/members/${memberData.id}`) }>
            <div className="remove-button" onClick={ onClickRemove }>
                <DeleteOutlined style={{ fontSize: "16px"}}/>
            </div>
            <div className="image-area">
                { memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile"/> : <FileImageOutlined style={{fontSize: "40px"}}/> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default withRouter(Card);