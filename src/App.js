import './App.scss';
import SideBar from './components/SideBar.jsx'

function App() {
  return (
    <div className="app">
      <div className="main-wrapper">
        <SideBar />
        <section>
          <header className="header">
            <ul>
              <li>About</li>
              <li>Resume</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </header>
          <div className="main">
            lorem
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
