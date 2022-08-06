
import './App.css';
import Adopted  from './components/adopted';
import Breeds from './components/breeds';
import { Charactericts } from './components/characteristics';
import { LiveSaves } from './components/liveSaved';
import TimeOver from './components/timeOver';

function App() {
  return (
    <div className="App">
      <div className='dog_img_div'>
        <div className='dog_img_div1'>
          <h1>Last Hope K9</h1>
          <p>where a last hope becomes a <span>new beginning</span></p>
        </div>
        <div className='dog_img_div2'>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-PUbosqPwiIG8Abo2Qy8VHb3cTMlA9VZ_w&usqp=CAU" alt="dog"/> */}
        </div>
      </div>
      <div className='info_container'>
        <div className='sub_info_container1'>
          <h1>Lives Saved</h1>
          <p>10,875</p>
          <div className='sub_info_container1_graph'>
            <LiveSaves/>
          </div>
        </div>
        <div className='sub_info_container2'>
          <h1>Avg Time to Adopt</h1>
          <p>45 days</p>
        <div className='avd_adopt'>
          <h1>Avg Time To Adopt Over Time</h1>
          <Adopted/>
          <p>Starts at Date of Transprt</p>
          <h2>Note:Avg Time to Adopt over Time</h2>
        </div>
        <div className='overTime'>
          <TimeOver/>
        </div>
        </div>
        <div className='sub_info_container3'>
          <h1>Characteristics</h1>
          <h2>Proportion of Dogs that...</h2>
          <Charactericts/>
          <div className='doesAre'>
            <div className='doesAre1'>
                <div className='blue'></div>
                <div className='span1'>Does/Are</div>
            </div>
            <div className='doesAre1'>
                <div className='grey'></div>
                <div className='span1'>Does Not/Are Not</div>
            </div>
            <div className='doesAre1'>
                <div className='greyWhite'></div>
                <div className='span1'>Not Sure</div>
            </div>
          </div>
          <h3>Top 10 Primary  Breeds(Including Mixes)</h3>
          <div className='breeds_div'>
          <Breeds/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
