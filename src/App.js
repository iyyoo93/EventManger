import EventSection from './Components/EventSection.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="stickHeader">
        <h2>Slido - Iyyappan Event Task </h2>
      </div>
      <div className="eventBody">
        <EventSection />
      </div>
    </div>
  );
}

export default App;
