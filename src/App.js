import logo from './logo.svg';
import './App.css';
import imageInSrc  from "./gomycode.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>
        <br/>
          <img src={imageInSrc} />
            <br/>
              <img src="/go.png" />
              </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QXjU9qTsYCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            );
}

            export default App;
