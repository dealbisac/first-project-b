import './App.css';
import City from './components/City'

function App() {
  return (
    <div className="App">
      <City city="London" feature="beautiful"/>
      <City city="New York" feature="fantastic"/>
      <City city="Kathmandu" feature="majestic"/>
      <City city="Beijing" feature="marvelous"/>

      {/* <p>Hello, I am in London. It is beautiful.</p>
      <p>Hello, I am in New York. It is fantastic.</p>
      <p>Hello, I am in Kathmandu. It is majestic.</p>
      <p>Hello, I am in Beijing. It is marvelous.</p> */}
      
    </div>
  );
}

export default App;
