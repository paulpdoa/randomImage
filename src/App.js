import logo from './logo.svg';
import './App.css'; 
import Secondform from './Secondform';
import Thirdform from './Thirdform';

const image = "https://picsum.photos/200";

const App = () => {
  return (
    <div className="main">
      <Thirdform/>
      <Secondform/>
   </div>
  );
}

export default App;
