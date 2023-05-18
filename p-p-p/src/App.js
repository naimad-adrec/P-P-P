import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/overview" element={<h1>Overview</h1>}/>
          <Route path="/income" element={<h1>Income</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;