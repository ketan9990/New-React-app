import './App.css';
import Video from './components/Video';
import videos from './components/Data/Data';
import PlayButton from './components/PlayButton';

function App() {

  

  return (
    <div className="App">
     <div>videos</div>
     {videos.map(video=><Video
     key={video.id} 
     verified={video.verified} 
     title={video.title} 
     views={video.views}
     time={video.time} 
     channel={video.channel}
     id={video.id}
     />)}
     <PlayButton message="play-msg" onSmash={(message)=>console.log(message)}>Play</PlayButton>
     <PlayButton message="pause-msg" onSmash={()=>console.log("Pauseee")}>Pause</PlayButton>
    </div>
  );
}

export default App;
