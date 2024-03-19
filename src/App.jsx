import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h2 className="danLogo">DAN LAB</h2>
        </div>
        <div className="btns">
          <button>About Us</button>
          <button>Projects</button>
          <button>Contact</button>
          <button>Blog</button>
          <button>Join Us</button>
        </div>
      </header>
      <main className="App-content">
        <div className="xleft"></div>
        <div className="xright">
          <div className="top">
          </div>
          <div className="mid">
          <h3 className="xtext">Enhancing Robotics</h3>
            <h1 className="xtx">Changing your idea of what <br />robots can do. Unlocking the <br />Power of AI</h1>
          </div>
          <div className="bott">
            <button>Our Openings</button>
            <h3 className="xtext">Fostering collaboration and < br />enhancing user experience</h3>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <div className="x">
          <button>DN LAB</button>
        </div>
        <div className="x">
          <button>R&D 2024</button>
        </div>
        <div className="x">
          <h3 className="xtext">
            Revolutionizes the Future, <br />
            Redefining Your Perception of <br />
            Robots
          </h3>
        </div>
        <div className="x">
          <h3 className="xtext">
            Human-Robot interaction as <br />
            Robot seamlessly integrates into <br />
            various environments
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
