import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

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
    </div>
  );
}

export default App;
