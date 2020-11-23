import styled from "styled-components"
import Navbar from './components/navbar/Navbar';
import Slider from './components/imageSlider/Slider';


const object = [
  {
      idx : 0,
      img : "images/img0.png",
      mainTxt1 : "2030년 마침내",
      mainTxt2 : "인류 최후의 유토피아",
      subTxt: "전원이 힘을 모아서 기술 중심 유토피아 건설하기"
  },
  {
      idx : 1,
      img : "/images/img1.png",
      mainTxt1 : "동그란 반지는",
      mainTxt2 : "고정관념이지",
      subTxt: "창에 비치는 달빛을 모티브로 한 사각 반지"
  },
  {
      idx : 2,
      img : "/images/img2.png",
      mainTxt1 : "성별에 상관없이",
      mainTxt2 : "멋진 우리는",
      subTxt: "말랑과 샤이앤, 트렌스젠더입니다"
  },
  {
      idx : 3,
      img : "/images/img3.png",
      mainTxt1 : "발그레한 장미색은",
      mainTxt2 : "어떻게 만들어질까",
      subTxt: "디자이너가 직접 만든 CMYK 컬러배합 맞추기"
  },
  {
      idx : 4,
      img : "/images/img4.png",
      mainTxt1 : "500년의 폐기물보다",
      mainTxt2 : "500년의 지구를 위해",
      subTxt: "CLAP 3기에서 플라스틱Free 창작자를 찾습니다"
  }
]
function App() {
  return (
    <>
      <Navbar/>
      <Slider object={object}/>
    </>
  );
}

export default App;
