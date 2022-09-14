import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <h1>
        Hello user
      </h1>
      <Header title='Qwerty'/>
      <Header title='Qwerty123'/>
      <Header />
    </div>
  );
}



export default App;
