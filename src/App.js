import Video from "./video.mp4";

function App() {

  return (
    <div className="container">
      <video className="video" autoPlay loop muted >
        <source className="video" src={Video} type="video/mp4" />
      </video>
      <div className="not-found">
        <div className="notFound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="#">Return</a>
      </div>
    </div>
  );
}

export default App;
