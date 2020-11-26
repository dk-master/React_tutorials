import './App.css';
// import Grid from './components/Grid';
// import style from 'styled-components';

// import main_android_BW from '../src/imgs/main_android_BW.png';

// import main_design_BW from '../src/imgs/main_design_BW.jpg';

// import main_ios_BW from '../src/imgs/main_ios_BW.jpg';

// import main_plan_BW from '../src/imgs/main_plan_BW.jpg';
// import main_server_BW from '../src/imgs/main_server_BW.jpg';

// import main_web_BW from '../src/imgs/main_web_BW.jpg';
import Counter from "./components/Counter";
const partInfo = [
  {
      title: "Plan",
      subTitle: "기획 파트장처럼 창업에 진심이라면?",
      img: main_plan_BW,
  },
  {
      title: "Design",
      subTitle: "한 눈에 들어오는 브랜딩을 하고 싶다면?",
      img: main_design_BW
  },
  {
      title: "Android",
      subTitle: "범용성 있는 어플을 만들고 싶다면?",
      img: main_android_BW
  },
  {
      title: "IOS",
      subTitle: "제2의 잡스가 되고 싶다면?",
      img:  main_ios_BW,
  },
  {
      title: "Server",
      subTitle: "깔끔한 API를 만들고 싶다면?",
      img: main_server_BW,
  },
  {
      title: "Web",
      subTitle: "어떤 애니메이션이든 자신 있고 싶다면?",
      img: main_web_BW,
  },
]

const PartWrap = style.div `
  position: absolute;
  bottom: 7%;
  z-index: 0;
  width: 100vw;
  height: 55vh;
  display : grid;
  grid-template-columns : 1fr 1fr 1fr;
  grid -template-rows : 50% 50% ;
`;

function App() {
  return (
    <Counter/>
  //   <PartWrap>
  //   {partInfo.map(part =>(
  //     <Grid key ={`part-${part.id}`} partInfo = {part}/>
  // ))}
  // </PartWrap>
  )
}

export default App;
