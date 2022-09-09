import './App.css';
import Body4Test from './components/body-4-test';
import Header from './components/header';
import SideBar from './components/side-bar';

function App() {
  return (
    <>
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <SideBar />
      </nav>
    </div>
    <div>
      <Body4Test />
    </div>
    </>
  );
}

export default App;
