
import Slide from './components/Slide';

const object = [
  {
      idx : 0,
      img : "img/subway0.png",
  },
  {
      idx : 1,
      img : "/img/subway1png",
  },
  {
      idx : 2,
      img : "/img/subway2.png",
  },
  {
      idx : 3,
      img : "/img/subway3.png",
  },

]
function App() {
  return (
    <Slide object ={object}/>
  );
}

export default App;
