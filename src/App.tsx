import { Outlet } from 'react-router-dom';
import './App.scss';
import AppRoutes from './components/routes/routes';

function App() {
  return (
    <div className="container">
        {/* @ts-ignore */}
        <AppRoutes/>
        <Outlet/>
          
      </div>
  );
}

export default App;
