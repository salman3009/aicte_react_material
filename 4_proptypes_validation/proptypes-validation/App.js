import './App.css';
import Product from './Product';
function App() {
  let obj={
    name:"salman"
  }
  return (
    <div className="App">
      <h1>Welcome to APP</h1>
      <Product {...obj}/>
    </div>
  );
}

export default App;
