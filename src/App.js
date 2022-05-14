import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Dashboard/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
