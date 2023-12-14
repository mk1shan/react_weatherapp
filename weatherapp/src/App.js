import './App.css';
import WeatherApp from './components/weatherApp/weatherApp';  // Update import statement

function App() {
  return (
    <div className="App">
      <WeatherApp />  {/* Use PascalCase for component names */}
    </div>
  );
}

export default App;