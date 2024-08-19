import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian/>

      {/* Random Color component*/}
      <RandomColor/>

      {/* Star Rating Component*/}
      <StarRating noOfStars={10}/>

      {/* Image slider Component*/}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={'10'}/>

      {/*Load more products component*/}
      <LoadMoreData/>

    </div>
  );
}

export default App;
