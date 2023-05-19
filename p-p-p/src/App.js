import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Overview from './components/overview';
import Income from './components/income';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/overview" element={<Overview></Overview>}/>
          <Route path="/income" element={<Income></Income>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;