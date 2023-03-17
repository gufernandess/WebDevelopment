import logo from './logo.svg';
import './App.css';
import HelloWorldArrow from './components/HelloWorldArrow/HelloWorldArrow';
import HelloWorldClass from './components/HelloWorldClass/HelloWorldClass';
import HelloWorldFunction from './components/HelloWorldFunction/HelloWorldFunction';
import HelloWorldOneLine from './components/HelloWorldOneLine/HelloWorldOneLine';
import Calculator from './components/InternFunctions/Calculator';
import Props from './components/Props/Props';

function App() {
  return (
    <>
    <HelloWorldArrow />
    <HelloWorldClass />
    <HelloWorldFunction />
    <HelloWorldOneLine />
    <Calculator />
    <Props name="Gustavo"/>
    </>
  );
}

export default App;
