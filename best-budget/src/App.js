import './App.css';
import AddBudgetItem from './components/AddBudgetItem';
import CssBaseline from '@mui/material/CssBaseline';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Categories/>
      <AddBudgetItem/>
    </div>
  );
}

export default App;
