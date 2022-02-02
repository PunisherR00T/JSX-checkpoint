import logo from './logo.svg';
import './App.css';
import video from './teest.mp4';
import image1 from './test1.jpg';
import image2 from './arbre.jpg';
import './style.css';
function App() {
  return (
    <div>
    <div className="App">

<h1 class="title red">Your name here</h1>
<img src = {image1} />
<img src = {image2} />
    </div>
    <video src ={video} width="320" height="240" controls type="video/mp4"/>

    </div>
  );
}

export default App;
