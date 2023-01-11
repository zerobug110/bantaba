import './App.scss';
import AppRoutes from './components/routes/routes';

function App() {
  return (
    <div className="container">
        {/* @ts-ignore */}
        <AppRoutes/>
      </div>
  );
}

export default App;
