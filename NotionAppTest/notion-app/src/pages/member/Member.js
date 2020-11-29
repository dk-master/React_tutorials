import MemberDetail from'../member/MemberDetail';
import MemberList from '../member/MemberList';

const { Switch,Route} = require("react-router-dom");

function Member({match}) {
    return (
        <section style={{margin:"0 90px"}}>
            <Switch>
                <Route exact path ={match.path} component={MemberList}/>
                <Route path={`${match.path}/:id`} component={MemberDetail}/>
            </Switch>
        </section>
    )
}

export default Member;