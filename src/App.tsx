import { Outlet } from 'react-router-dom';
import './App.scss';
import AppRoutes from './components/routes/routes';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
        {/* @ts-ignore */}
        <AppRoutes/>
        <Outlet/>
          {/* <ToastContainer/> */}
      </div>
  );
}

export default App;
