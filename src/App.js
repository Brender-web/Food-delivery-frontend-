
import './App.css';
import Bresecose from './Components/bresecose';
import Signup from './Components/signup';
import Order from './Components/order';
import Login from './Components/login';

function App() {
  return (
    <div className="App">
<h2>WELCOME TO BRESECOSE FOODS</h2>

<Bresecose/>
<Login/>
<Signup/>
<Order/>
</div>
  );
}

export default App;
