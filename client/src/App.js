import logo from './logo.svg';
import './App.css';
import Routes from './routes'

/**
 * Since a react app is just a collection of routes,
 * our App.js just has to include our <Routes /> component
 * where we defined the routes
 */
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
