import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData/AddData';
import Recommendation from './components/Recommendation/Recommendation';
import MedicalData from './components/MedicalData/MedicalData';

function App() {
  return (
    <div className="App">
      <AddData/>
      <Recommendation/>
      <MedicalData />
    </div>
  );
}

export default App;
