import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Header from  "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card/>
    </div>
  );
}

export default App;
