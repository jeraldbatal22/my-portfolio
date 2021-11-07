import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

