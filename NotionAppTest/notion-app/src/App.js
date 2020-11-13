import MainHeader from './components/header/MainHeader';
import Member from './pages/member/Member';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Route component={MainHeader}/>
      <Switch>
        <Route exact path="/">My Notion App main Page</Route>
        <Route path="/members" component={Member}/> {/* 여기서 Memberlist, memberdetail 중첩 라우팅 */}
        <Route path="/*">404 NOT FOUND</Route>"
      </Switch>
    </div>
    </Router>
  );
}
export default App;
