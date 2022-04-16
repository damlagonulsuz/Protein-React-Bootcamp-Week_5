import './App.css';
import Register from './pages/Register';
import Left_Side from './components/Left_Side';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Left_Side/>
        <Register/>
      </div>
    </div>
  );
}

export default App;
