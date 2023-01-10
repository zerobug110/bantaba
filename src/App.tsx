import './App.css';
import { Form } from './components/form';
import { Home } from './components/home';
// import {Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route>

          </Route>

        </Routes>
      </Router> */}
      <Form/>
      <Home/>
    </div>
  );
}

export default App;
